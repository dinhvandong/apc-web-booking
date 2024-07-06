package com.apc.webadmin.services;

import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.models.ConfirmCode;
import com.apc.webadmin.models.User;
import com.apc.webadmin.models.Video;
import com.apc.webadmin.repositories.ConfirmCodeRepository;
import com.apc.webadmin.repositories.VideRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ConfirmCodeService {

    @Autowired
    ConfirmCodeRepository confirmCodeRepository;
    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    @Autowired
    UserService userService;
    public List<ConfirmCode> findAll(){
        return confirmCodeRepository.findAll();
    }

    public ConfirmCode create(ConfirmCode news)
    {
        Long id = sequenceGeneratorService.generateSequence(ConfirmCode.SEQUENCE_NAME);
        news.setId(id);
        return confirmCodeRepository.insert(news);
    }
    public boolean delete(Long id){

        confirmCodeRepository.deleteById(id);
        return  true;
    }

    public boolean deleteAll()
    {
        confirmCodeRepository.deleteAll();
        return true;
    }

    public ConfirmCode findById(Long id)
    {
        Optional<ConfirmCode> optional = confirmCodeRepository.findById(id);
        if(optional.isEmpty()) return null;
        return optional.get();
    }


    public ConfirmCode findBySecureCodeAndEmailAndType(String code, String email, String type){

        ConfirmCode found = confirmCodeRepository.findBySecureCodeAndEmailAndType(code, email, type);
        if(found!= null){

            if(found.getStatus()== ConfirmCode.STATUS_CONFIRM_PENDING)
            {
                return found;
            }else {
                return null;
            }
        }

        return  null;

    }

    public  ConfirmCode findBySecureCodeAndPath(String code, String path){

        ConfirmCode confirmCode = confirmCodeRepository.findBySecureCodeAndPathRandomAndStatus(code, path, ConfirmCode.STATUS_CONFIRM_PENDING);
        if(confirmCode != null){
            confirmCode.setStatus(ConfirmCode.STATUS_CONFIRM_OK);

            String email = confirmCode.getEmail();
            User user = userService.findByEmail(email);
            user.setStatus(User.STATUS_CONFIRM);
            userService.updateUser(user);
            return confirmCodeRepository.save(confirmCode);

        }else
        {

            return null;
        }


    }

    public ConfirmCode update(ConfirmCode confirmCode)
    {
        Optional<ConfirmCode> optional = confirmCodeRepository.findById(confirmCode.getId());
        if(optional.isEmpty()) return null;
        ConfirmCode found = optional.get();
        found.setEmail(confirmCode.getEmail());
        found.setSecureCode(confirmCode.getSecureCode());
        found.setUserID(confirmCode.getUserID());
        found.setEmail(confirmCode.getEmail());
        return confirmCodeRepository.save(found);
    }
}
