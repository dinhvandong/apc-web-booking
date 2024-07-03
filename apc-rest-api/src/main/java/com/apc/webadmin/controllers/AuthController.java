package com.apc.webadmin.controllers;

import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.dto.ResponseObject;
import com.apc.webadmin.dto.UserDTO;
import com.apc.webadmin.jwt.JwtTokenStore;
import com.apc.webadmin.models.ConfirmCode;
import com.apc.webadmin.models.User;
import com.apc.webadmin.repositories.UserRepository;
import com.apc.webadmin.security.PasswordEncoder;
import com.apc.webadmin.services.AuthService;
import com.apc.webadmin.services.ConfirmCodeService;
import com.apc.webadmin.services.EmailService;
import com.apc.webadmin.services.UserService;
import com.apc.webadmin.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
//http://163.44.206.118

@CrossOrigin(origins = {
        "http://163.44.206.118:83",
        "http://163.44.206.118:80",
        "http://163.44.206.118",
        "http://163.44.206.118:81",
        "http://localhost:3001",
        "http://localhost:3000",
        "http://150.95.113.18",
        "http://ambassadordaycruise.com/",
        "http://admin.ambassadordaycruise.com/"

})
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthService authService;
    @Autowired
    UserService userService;

    @Autowired
    ConfirmCodeService confirmCodeService;

    @Autowired
    EmailService emailService;

    @Autowired
    SequenceGeneratorService sequenceGeneratorService;
    @Autowired
    UserRepository userRepository;
    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody UserDTO userDTO) {
        if (userService.existsByEmailOrPhone(userDTO.getEmail(), userDTO.getPhone())) {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, "null", "Email already exists"));
        }
        User requestUser = new User();
        requestUser.setEmail(userDTO.getEmail());
        requestUser.setPassword(userDTO.getPassword());
        requestUser.setPhone(userDTO.getPhone());
        requestUser.setCountry(userDTO.getCountry());
        requestUser.setLastName(userDTO.getLastName());
        requestUser.setFirstName(userDTO.getFirstName());
        requestUser.setStatus(1);
        requestUser.setRole("client");
        requestUser.setCountry(userDTO.getCountry());
        requestUser.setGender(userDTO.getGender());
        requestUser.setStatus(1);
        User user = userService.createUser(requestUser);

        emailService.sendEmailRegisterSuccess(userDTO.getEmail(), userDTO.getFirstName() + " "+ userDTO.getLastName());

        return ResponseEntity.status(HttpStatus.OK).body
                (new ResponseObject(200, user, "success"));
    }

    @PostMapping("/signupAdmin")
    public ResponseEntity<?> signupAdmin(@RequestBody UserDTO userDTO) {
        if (userService.findByEmail(userDTO.getEmail())!=null) {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, "null", "Email already exists"));
        }
        User requestUser = new User();
        //requestUser.setId(1L);
        requestUser.setEmail(userDTO.getEmail());
        requestUser.setPassword(PasswordEncoder.getInstance().encodePassword(userDTO.getPassword()));
        requestUser.setPhone(userDTO.getPhone());
        requestUser.setCountry(userDTO.getCountry());
        requestUser.setLastName(userDTO.getLastName());
        requestUser.setFirstName(userDTO.getFirstName());
        requestUser.setStatus(1);
        requestUser.setStatus(1);
        requestUser.setGender(userDTO.getGender());
        requestUser.setRole("admin");
        User user = userService.createUser(requestUser);
        return ResponseEntity.status(HttpStatus.OK).body
                (new ResponseObject(200, user, "success"));
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody UserDTO userDTO) {
        User user = userService.findByEmail((userDTO.getEmail()));
        if (user == null || !PasswordEncoder.getInstance().matches(userDTO.getPassword(), user.getPassword())) {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ResponseObject(201, user, "Token invalid"));
        }
        String token = authService.loginWithEmailAndPassword(userDTO.getEmail(), userDTO.getPassword());
        JwtTokenStore.getInstance().storeToken(userDTO.getEmail(), token);
        return ResponseEntity.status(HttpStatus.OK).body
                (new ResponseObject(200,user,token));
    }

    @PostMapping("/signinAdmin")
    public ResponseEntity<?> signinAdmin(@RequestBody UserDTO userDTO) {
        User user = userService.findByEmail((userDTO.getEmail()));
        if (!user.getRole().equals("admin") || !PasswordEncoder.getInstance().matches(userDTO.getPassword(), user.getPassword())) {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ResponseObject(201, user, "Token invalid"));
        }
        String token = authService.loginWithEmailAndPassword(userDTO.getEmail(), userDTO.getPassword());
        JwtTokenStore.getInstance().storeToken(userDTO.getEmail(), token);
        return ResponseEntity.status(HttpStatus.OK).body
                (new ResponseObject(200,user,token));
    }


    @PostMapping("/requestCodeChangePassword")
    public ResponseEntity<?> requestCodeChangePassword(@RequestBody ConfirmCode confirmCode){
        Long id = sequenceGeneratorService.generateSequence(ConfirmCode.SEQUENCE_NAME);
        confirmCode.setType("CHANGE_PASSWORD");
        confirmCode.setId(id);
        confirmCode.setCreatedTime(DateUtils.getCurrentDate());
        ConfirmCode confirmCode1 = confirmCodeService.create(confirmCode);
        return ResponseEntity.status(HttpStatus.OK).body
                (new ResponseObject(200,confirmCode1,"success"));

    }
}
