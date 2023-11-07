import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { UseGuards } from '@nestjs/common';
import { WsAuthGuard } from '../../guards/ws-auth.guard';
@UseGuards(WsAuthGuard)
@WebSocketGateway({
  cors: {
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    origin: ['http://localhost:3000'],
  },
  //transports: ['polling', 'websocket'],
})
export class ChatWebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(
    // eslint-disable-next-line prettier/prettier
    private readonly jwtService: JwtService,
  ) {}
  @WebSocketServer()
  server: Server;

  handleConnection(@ConnectedSocket() client: Socket) {
    try {
      const accessToken: string = client.handshake.auth.token;
      if (!accessToken) {
        client.disconnect();
      }
      const { _id: userId } = this.jwtService.verify(accessToken, {
        secret: process.env.SECRET_KEY,
      });
      client.join(userId);
    } catch (error) {
      console.log(error);
    }
  }

  handleDisconnect(socket: Socket): void {
    try {
      socket.disconnect();
    } catch (error) {
      console.log(error);
    }
  }

  
}
