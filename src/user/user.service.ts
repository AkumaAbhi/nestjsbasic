import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    createUser(registerUserDto){
       console.log(registerUserDto)
        return {
            message : "user created userservice"
        }
    }
}
