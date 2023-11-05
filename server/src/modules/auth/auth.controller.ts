import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto, RegisterResponse } from './dto/create-user.dto';


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
    console.log(body)
  }
}
