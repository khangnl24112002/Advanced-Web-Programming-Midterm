import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { GetUsersResponse } from './dto/create-user.dto';

@Controller('user')
@ApiTags('user')
export class UserController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly userService: UserService) {}


  @ApiCreatedResponse({
    type: GetUsersResponse,
  })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiCreatedResponse({
    type: GetUsersResponse,
  })
  @Patch('email')
  update(@Body() updateUserDto: UpdateUserDto, @Param('email') email: string) {
    return this.userService.update(email,updateUserDto);
  }

}
