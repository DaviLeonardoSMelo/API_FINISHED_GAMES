import { User as RawUser } from 'node_modules/mysql2';
import { User } from '@application/entities/user/user'
import { Name } from '@application/entities/name';
import { Email } from '@application/entities/user/Email';
import { Password } from '@application/entities/user/Password';

export class MysqlUserMapper {
  static toMysql(user: User) {
    return {
        userId: user.userId,
        userName: user.userName,
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
    };
  }

  static toDomain(raw: RawUser): User {
    return new User(
      {
        userName: new Name(raw.userName),
        email: new Email(raw.email),
        password: new Password(raw.password),
        createdAt: raw.createdAt,
      },
      raw.userId,
    );
  }
}
