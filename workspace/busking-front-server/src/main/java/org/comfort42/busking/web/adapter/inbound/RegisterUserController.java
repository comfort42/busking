package org.comfort42.busking.web.adapter.inbound;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.comfort42.busking.application.domain.model.Company;
import org.comfort42.busking.application.domain.model.User;
import org.comfort42.busking.application.domain.model.UserRole;
import org.comfort42.busking.application.domain.service.RegisterUserService;
import org.comfort42.busking.application.port.inbound.RegisterUserCommand;
import org.comfort42.busking.application.port.inbound.RegisterUserUseCase;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/api/users")
class RegisterUserController {

    record RegisterUserWebRequest(
            String username,
            String password,
            String realName,
            String email,
            String phoneNumber,
            Long companyId) {
    }

    private final ObjectMapper objectMapper;
    private final RegisterUserUseCase registerUserUseCase;

    RegisterUserController(final ObjectMapper objectMapper, final RegisterUserService registerUserService) {
        this.objectMapper = objectMapper;
        this.registerUserUseCase = registerUserService;
    }

    @PostMapping
    ResponseEntity<?> registerUser(@RequestBody final RegisterUserWebRequest payload) {
        final RegisterUserCommand cmd = new RegisterUserCommand(
                payload.username(),
                payload.password(),
                payload.realName(),
                payload.email(),
                payload.phoneNumber(),
                Company.CompanyId.of(payload.companyId),
                UserRole.EMPLOYEE
        );

        try {
            final User user = registerUserUseCase.registerUser(cmd);
            return ResponseEntity
                    .created(new URI("/api/users/" + user.id()))
                    .build();
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT.value()).build();
        } catch (Exception e) {
            // TODO(meo-s): 예외 처리
            return ResponseEntity.internalServerError().build();
        }
    }

}
