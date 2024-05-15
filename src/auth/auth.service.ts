import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response, User } from 'src/users/interfaces/user.interface';
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  async validateUser(login: string, password: string): Promise<Response | null> {
    const user = await this.userService.userByEmail(login)
    if (user && user.password === password) {
      const { password, ...response } = user
      return response
    }
    return null
  }

  async login(user: any) {  // AQUI NÃO ENTENDI MUITO BEM O req, NÃO ENTENDI OQ TERIA DENTRO DELE
    const payload = { login: user.login, sub: user.userId }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}