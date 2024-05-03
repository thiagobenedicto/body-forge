import { Injectable } from "@nestjs/common";
import { User } from "./interfaces/user.interface";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async user(usersWhereUniqueInput: Prisma.UsersWhereUniqueInput // tentar explicar pq não entendi direito (eu acho kkkk)
  ): Promise<User | null> {
    return this.prisma.users.findUnique({
      where: usersWhereUniqueInput,
    });
  }

  async userByEmail(email: string) {
    return this.prisma.users.findFirst({
      where: {
        login: email
      },
    });
  }

  async users(params: { // pelo que eu entendi ele vai retornar um array de usuários com algumas opções de paginação (perguntar sobre paginação burrokkkkk)
    skip?: number;
    take?: number;
    cursor?: Prisma.UsersWhereUniqueInput;
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.users.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: Prisma.UsersCreateInput): Promise<User> {
    return this.prisma.users.create({
      data,
    });
  }

  async updateUser(params: {
    where: Prisma.UsersWhereUniqueInput;
    data: Prisma.UsersUpdateInput;
  }): Promise<User> {
    const { data, where } = params;
    return this.prisma.users.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UsersWhereUniqueInput): Promise<User> {
    return this.prisma.users.delete({
      where,
    });
  }
}