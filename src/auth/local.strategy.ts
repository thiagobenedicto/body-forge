import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { User } from "src/users/interfaces/user.interface";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'login' });
  }

  async validate(login: string, password: string): Promise<Response | any> {// COMO FAZER A TIPAGEM DO UnauthorizedException
    const response = await this.authService.validateUser(login, password);
    if (!response) {
      throw new UnauthorizedException();
    }
    return response;
  }
}