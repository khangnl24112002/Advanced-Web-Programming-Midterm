import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto, RegisterResponse } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';


@Controller('auth')
@ApiTags('auth')
export class AuthController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiCreatedResponse({
    type: RegisterResponse,
  })
  async register(@Body() body: RegisterDto) {
    return this.authService.signUpByEmail(body);
  }

  @Post('login')
  async login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }
}
