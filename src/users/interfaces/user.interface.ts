export interface User {
  id: number;
  name: string;
  login: string;
  password?: string;
}

export interface ValidatedUser {
  id: number;
  isAdmin: boolean;
  login: string;
}
