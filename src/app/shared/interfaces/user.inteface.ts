import { Game } from './games.interface';

export interface UserInteface {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  email: string;
  password: string;
  isLogged?: boolean;
  avatar: Blob;
  userRole: string;
  updateUserInfo: boolean;
  games: Game[];
}

export interface userCreeds {
  password: string;
  email: string;
}

export interface FireBaseUser {
  displayName: string | null;
  email: string | null;
  emailVerified: boolean | null;
  isAnonymous: boolean | null;
  phoneNumber: string | null;
  photoURL: string | null;
  refreshToken: string | null;
  uid: string | null;
}
