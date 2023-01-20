import {Game} from "./games.interface";

export interface UserInteface {
  firstName?: string,
  lastName?: string,
  phoneNumber?: string,
  email: string,
  password: string,
  isLogged: boolean,
  games: Game[]
}
