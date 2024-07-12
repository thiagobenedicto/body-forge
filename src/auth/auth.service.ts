import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ValidatedUser } from 'src/users/interfaces/user.interface';
import { UserService } from 'src/users/user.service';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from './dto/login.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) { }

  async validateUser(
    login: string,
    password: string,
  ): Promise<ValidatedUser> {
    const user = await this.userService.userByEmail(login);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { id, name, login } = user;

      const validatedUser = {
        id,
        name,
        login,
      }

      return validatedUser;
    }
    throw new UnauthorizedException();
  }



  async login(loginPayload: LoginDTO) {

    const user = await this.prisma.users.findFirst({
      where: {
        login: loginPayload.login,
      }
    })

    const payload = { login: loginPayload.login, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
