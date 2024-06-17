import { Investment } from "./investment";
import { User } from "./user";


export type Portfolio = {
  id: number;
  investments: Investment[];
  user: User;
};


