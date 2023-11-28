export class UserQueries {
    static readonly getUserById = `
      SELECT * FROM users WHERE userId = ?;
    `;
  }