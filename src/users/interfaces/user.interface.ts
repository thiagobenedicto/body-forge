export interface User {
  id: number;
  name: string;
  login: string;
  password?: string;
}

export interface UserWithoutPassword extends Omit<User, 'password'> { }

export interface ValidatedUser {
  id: number;
  name: string;
  login: string;
}
