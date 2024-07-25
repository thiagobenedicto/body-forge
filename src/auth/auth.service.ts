import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
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

  async validateUser(loginPayload: LoginDTO): Promise<ValidatedUser> {
    const user = await this.userService.userByEmail(loginPayload.login);

    if (!user) throw new NotFoundException('User not found');
    if (!await bcrypt.compare(loginPayload.password, user.password)) throw new UnauthorizedException();

    const { id, name, login } = user;

    const validatedUser = {
      id,
      name,
      login,
    }

    return validatedUser;
  }

  async login(loginPayload: LoginDTO) {
    const user = await this.validateUser(loginPayload);
    const payload = { login: user.login, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
