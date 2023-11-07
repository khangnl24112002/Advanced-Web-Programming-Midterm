import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../admin/users/users.service';
import { WsException } from '@nestjs/websockets';
import { Socket } from 'socket.io';
@Injectable()
export class WsGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean | any> {
    try {
      const client: Socket = context.switchToWs().getClient<Socket>();
      const accessToken = client.handshake.auth.token;
      if (!accessToken) {
        return new WsException('Unauthorized.');
      }
      const { _id: userId } = this.jwtService.verify(accessToken, {
        secret: process.env.JWT_SECRET,
      });
      if (!userId) {
        return new WsException('Unauthorized.');
      }
      const user = this.usersService.getUserById(userId);
      if (!user) {
        return new WsException('User is not exists.');
      }
      return true;
    } catch (error) {
      console.log(error);
      throw new WsException(error.message);
    }
  }
}
