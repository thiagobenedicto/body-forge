import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'src/users/interfaces/user.interface';
import { UserService } from 'src/users/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }

  async validateUser(
    login: string,
    password: string,
  ): Promise<Response | null> {
    const user = await this.userService.userByEmail(login);
    const verifyPassword = async (
      password: string,
      hash: string,
    ): Promise<boolean> => {
      return await bcrypt.compare(password, hash);
    };

    if (user && (await verifyPassword(password, user.password))) {
      const { password, ...response } = user;
      return response;
    }
    return null;
  }

  async login(user: any) {
    const payload = { login: user.login, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
