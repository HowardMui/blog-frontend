import { TimeStamp } from "./common";

export interface UserLoginPayload {
  token: string;
  user: User;
}

export type AuthType = "signin" | "reset-pw" | "register";

export interface User extends TimeStamp {
  bio: string | null;
  email: string | null;
  username: string | null;
  userId: number | null;
  isVerified: boolean;
  image: string | null;
  UserAuth: UserAuth;
}

export interface UserAuth extends TimeStamp {
  userAuthId: number;
  userId: number;
  email: string;
  hash: string;
  provider: string;
}
