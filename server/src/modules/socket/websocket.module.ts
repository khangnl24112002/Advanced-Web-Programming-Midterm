import { Module } from '@nestjs/common';
import { ChatWebsocketGateway } from './websocket.gateway';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [ChatWebsocketGateway, JwtService],
})
export class WebSocketModule {}
