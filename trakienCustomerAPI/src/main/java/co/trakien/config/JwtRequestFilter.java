package co.trakien.config;

import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.http.HttpMethod;
import javax.ws.rs.core.HttpHeaders;
import java.io.IOException;
import java.util.*;

import static co.trakien.util.Constants.CLAIMS_ROLES_KEY;
import static co.trakien.util.Constants.COOKIE_NAME;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {
    @Value("${app.secret}")
    String secret;

    public JwtRequestFilter() {
    }

    /**
     * This method is called for every request. It checks if the request has a valid
     * JWT token.
     * If it does, it sets the authentication in the context, to specify that the
     * current user is authenticated.
     */
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        if (HttpMethod.OPTIONS.name().equals(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
            filterChain.doFilter(request, response);
        } else {
            try {
                Optional<Cookie> optionalCookie = request.getCookies() != null
                        ? Arrays.stream(request.getCookies()).filter(
                                cookie -> Objects.equals(cookie.getName(), COOKIE_NAME)).findFirst()
                        : Optional.empty();

                String headerJwt = null;
                if (authHeader != null && authHeader.startsWith("Bearer ")) {
                    headerJwt = authHeader.substring(7);
                }
                String token = optionalCookie.isPresent() ? optionalCookie.get().getValue() : headerJwt;
                if (token != null) {
                    Jws<Claims> claims = Jwts.parser()
                            .setSigningKey(Base64.getEncoder().encodeToString(secret.getBytes())).parseClaimsJws(token);
                    Claims claimsBody = claims.getBody();
                    String subject = claimsBody.getSubject();
                    System.out.println(subject);
                    List<String> roles = claims.getBody().get(CLAIMS_ROLES_KEY, ArrayList.class);
                    System.out.println(claims);
                    if (roles == null) {
                        response.sendError(HttpStatus.UNAUTHORIZED.value(), "Invalid token roles");
                    } else {
                        SecurityContextHolder.getContext()
                                .setAuthentication(new TokenAuthentication(token, subject, roles));
                    }
                    request.setAttribute("claims", claimsBody);
                    request.setAttribute("jwtUserId", subject);
                    request.setAttribute("jwtUserRoles", roles);

                }
                filterChain.doFilter(request, response);
            } catch (MalformedJwtException e) {
                System.out.println(e.getMessage());
                response.sendError(HttpStatus.BAD_REQUEST.value(), "Missing or wrong token");
            } catch (ExpiredJwtException e) {
                response.sendError(HttpStatus.UNAUTHORIZED.value(), "Token expired or malformed");
            }
        }
    }
}