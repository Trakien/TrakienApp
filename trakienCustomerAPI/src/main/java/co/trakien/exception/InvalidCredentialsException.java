package co.trakien.exception;

import javax.ws.rs.InternalServerErrorException;

import org.springframework.http.HttpStatus;

import co.trakien.dto.ServerErrorResponseDto;
import co.trakien.util.ErrorCodeEnum;

public class InvalidCredentialsException extends InternalServerErrorException {
    public InvalidCredentialsException() {

        super(new ServerErrorResponseDto("User not found", ErrorCodeEnum.USER_NOT_FOUND, HttpStatus.NOT_FOUND)
                .getMessage());

    }
}