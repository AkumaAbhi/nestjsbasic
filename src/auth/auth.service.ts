import { Body, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(private readonly userService:UserService){}

     async register(registerUserDto){


        const saltround = 10
        const bcryptpassword =  await bcrypt.hash(registerUserDto.password,saltround)
        //check for email already registered
        //hash password
        //store user in db
        //generate and return token
        //send token in response

        return this.userService.createUser({...registerUserDto, password : bcryptpassword})
    }

}
