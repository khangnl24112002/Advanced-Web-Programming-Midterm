import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { hashPassword } from 'src/utils/bcrypt';
import { RegisterDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    // eslint-disable-next-line prettier/prettier
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  async generateAccessToken(payload): Promise<string> {
    return this.jwtService.signAsync(payload, {
      // expiresIn: '10',
      secret: process.env.SECRET_KEY,
    });
  }
  async signUpByEmail(createUserDTO: RegisterDto) {
    const { firstName, lastName, email, password } = createUserDTO;
    const encryptedPassword = await hashPassword(password);
    let user = await this.prismaService.users.findFirst({
      where: {
        email,
      },
    });
    if (user) {
      throw new HttpException({
        status: false, 
        daa: null,
        message: "Tài khoản đã tồn tại"
      }, HttpStatus.BAD_REQUEST)
    } else {
      user = await this.prismaService.users.create({
        data: {
          firstName,
          lastName,
          email,
          encryptedPassword,
        },
      });
    }
    const accessToken = await this.generateAccessToken({
      email: email,
      id: user.id,
    });
    return {
      token: accessToken,
      user: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    };
  }
}
