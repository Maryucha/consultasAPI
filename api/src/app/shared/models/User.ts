import { Address } from "./Address";

export interface User {

  id?: number,
  name: string,
  email: string,
  address: Address,
  phone: any,
}

export type Users = Array<User>;
