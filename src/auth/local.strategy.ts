import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { ValidatedUser } from 'src/users/interfaces/user.interface';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'login' });
  }

  async validate(login: string, password: string): Promise<ValidatedUser | null> {
    const validatedUser = await this.authService.validateUser(login, password);
    if (!validatedUser) {
      throw new UnauthorizedException();
    }
    return validatedUser;
  }
}
