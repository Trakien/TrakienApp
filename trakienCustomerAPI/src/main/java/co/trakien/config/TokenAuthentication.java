package co.trakien.config;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class TokenAuthentication
        extends AbstractAuthenticationToken {
    String token;

    String subject;

    List<String> roles;

    /**
     * This constructor can be used by an AuthenticationManager
     * to build an Authentication object.
     */
    public TokenAuthentication(String token, String subject, List<String> roles) {
        super(null);
        this.token = token;
        this.subject = subject;
        this.roles = roles;
    }

    /**
     * This constructor can be used by an AuthenticationProvider
     * to build an Authentication object.
     */
    @Override
    public boolean isAuthenticated() {
        return !token.isEmpty() && !subject.isEmpty() && !roles.isEmpty();
    }

    /**
     * This constructor can be used by an AuthenticationProvider
     * to build an Authentication object.
     */
    @Override
    public Object getCredentials() {
        return token;
    }

    /**
     * This constructor can be used by an AuthenticationProvider
     * to build an Authentication object.
     */
    @Override
    public Object getPrincipal() {
        return subject;
    }

    /**
     * This constructor can be used by an AuthenticationProvider
     * to build an Authentication object.
     */
    @Override
    public Collection<GrantedAuthority> getAuthorities() {
        return roles.stream().map(role -> new SimpleGrantedAuthority("ROLE_" + role)).collect(
                Collectors.toList());
    }

}