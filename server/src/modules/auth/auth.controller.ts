import {
  Controller,
  Post,
  Body,
 
} from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async signUpByEmail(@Body() createUserDTO: SignUpEmailDTO) {
    try {
      const { email } = createUserDTO;
      const exUser = await this.authService.findUserVerifiedByEmail(email);
      if (exUser) {
        throw new CustomError('Email đã tồn tại.', HttpStatus.BAD_REQUEST);
      }
      return this.authService.signUpByEmail(createUserDTO);
    } catch (error) {
      console.log(error);
      handleError(error);
    }
  }
}
