import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('users')
export class UserController {
  @Post()
  async createUser(@Body() userPayload: any) { // Fix using userPayloadDTO
    return 'This action adds a new user'
  }
  
  @Get()
  async getAllUsers() {
    return 'This action returns all users'
  }

  @Get(':id')
  async getOneUser(@Param('id') id: string) {
    console.log(id);
    return `This action returns a #${id} user`
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() userPayload: any) { // <- Fix using userPayloadDTO
    return `This action updates a #${id} user`
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return `This action removes a #${id} user`
  }
}