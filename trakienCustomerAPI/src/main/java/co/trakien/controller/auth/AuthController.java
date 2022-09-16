package co.trakien.controller.auth;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.trakien.dto.LoginDto;
import co.trakien.dto.TokenDto;
import co.trakien.entity.Customer;
import co.trakien.exception.InvalidCredentialsException;
import co.trakien.service.CustomerService;
import java.util.Calendar;
import java.util.Date;
import java.util.Optional;

import static co.trakien.util.Constants.CLAIMS_ROLES_KEY;
import static co.trakien.util.Constants.TOKEN_DURATION_MINUTES;

@RestController
@RequestMapping("v2/auth")
public class AuthController {

    @Value("${app.secret}")
    String secret;

    private final CustomerService customerService;

    /**
     * This method creates a token
     * 
     * @param loginDto
     * @return ResponseEntity<TokenDto>
     */
    public AuthController(@Autowired CustomerService customerService) {
        this.customerService = customerService;
    }

    /**
     * This method creates a token
     * 
     * @param loginDto
     * @return ResponseEntity<TokenDto>
     */
    @PostMapping
    public TokenDto login(@RequestBody LoginDto loginDto) {

        Optional<Customer> customer = customerService.findByEmail(loginDto.getEmail());
        if (customer.isPresent() && BCrypt.checkpw(loginDto.getPassword(), customer.get().getPasswordHash())) {
            return generateTokenDto(customer.get());
        } else {
            throw new InvalidCredentialsException();
        }
    }

    /**
     * This method generates a token
     * 
     * @param customer
     * @return TokenDto
     */
    private String generateToken(Customer customer, Date expirationDate) {
        return Jwts.builder()
                .setSubject(customer.getId())
                .claim(CLAIMS_ROLES_KEY, customer.getRoles())
                .setIssuedAt(new Date())
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }

    /**
     * This method generates a token
     * 
     * @param customer
     * @return TokenDto
     */
    private TokenDto generateTokenDto(Customer customer) {
        Calendar expirationDate = Calendar.getInstance();
        expirationDate.add(Calendar.MINUTE, TOKEN_DURATION_MINUTES);
        String token = generateToken(customer, expirationDate.getTime());
        return new TokenDto(token, expirationDate.getTime());
    }
}