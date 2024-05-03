import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthService {
  constructor (private userService: UserService) {}

  async validateUser (login: string, password: string): Promise<any> {
    const user = await this.userService.userByEmail(login)
    if (user && user.password === password) {
      const { password, ...result } = user
      return result
    }
    return null
  }
}