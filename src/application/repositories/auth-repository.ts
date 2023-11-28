
import { User } from "@application/entities/user/user";

export abstract class AuthRepository {
    abstract getUserByCredentials(email: string, password: string): Promise<User | null>;
  }