import { Game } from './games.interface';

export interface UserInteface {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  email: string;
  password: string;
  isLogged?: boolean;
  avatar: string;
  userRole: string;
  updateUserInfo: boolean;
  games: Game[];
}

export interface userCreeds {
  password: string;
  email: string;
}
