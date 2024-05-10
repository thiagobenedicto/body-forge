import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  async validateUser(login: string, password: string): Promise<any> {
    const user = await this.userService.userByEmail(login)
    if (user && user.password === password) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: any) {
    const payload = { login: user.login, sub: user.userId }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}