package co.trakien.dto;

import org.springframework.http.HttpStatus;

import co.trakien.util.ErrorCodeEnum;

public class ServerErrorResponseDto {

    String message;
    ErrorCodeEnum errorCode;
    int httpStatus;

    /**
     * This method creates a ServerErrorResponseDto
     * 
     * @param message
     * @param errorCode
     * @param httpStatus
     */
    public ServerErrorResponseDto(String message, ErrorCodeEnum errorCode, HttpStatus httpStatus) {
        this.message = message;
        this.errorCode = errorCode;
        this.httpStatus = httpStatus.value();
    }

    public String getMessage() {
        return message;
    }

    public ErrorCodeEnum getErrorCode() {
        return errorCode;
    }

    public int getHttpStatus() {
        return httpStatus;
    }

}