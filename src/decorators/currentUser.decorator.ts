import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const CurrentUser = createParamDecorator(
  (_, context: ExecutionContext) => { // esse _ é para ignorar o primeiro parâmetro que é passado para o decorator
    const request = context.switchToHttp().getRequest();
    return request.user;
  }
)