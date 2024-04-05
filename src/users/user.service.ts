import { Injectable } from "@nestjs/common";
import { User } from "./interfaces/user.interface";

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find(user => user.id === id);
  }

  update(id: number, userPayload: User) {
    const index = this.users.findIndex(user => user.id === id);
    this.users[index] = userPayload;
  }

  remove(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    this.users.splice(index, 1);
  }
}