import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    // eslint-disable-next-line prettier/prettier
    private readonly prismaService: PrismaService
  ) {}

}
