import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from 'src/dto/registerUserDto';

@Controller('auth')
export class AuthController {

    constructor( private readonly authservice : AuthService){}
    @Post('register')
    register(@Body() registerUserDto : RegisterUserDto){
       return this.authservice.register(registerUserDto)
    }

    
}
