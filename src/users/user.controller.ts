import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body(new ValidationPipe()) userPayload: CreateUserDTO) {
    return this.userService.createUser(userPayload);
  }

  @Get()
  async getAllUsers() {
    return this.userService.users({});
  }

  @Get(':id')
  async getOneUser(@Param('id') id: string) {
    return this.userService.user({ id: Number(id) });
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body(new ValidationPipe()) userPayload: UpdateUserDTO) {
    return this.userService.updateUser({ where: { id: Number(id) }, data: userPayload });
  }
}