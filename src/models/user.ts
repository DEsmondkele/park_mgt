import { Knex } from 'knex';
import knex from '../config/dbconfig';

export interface User {
  username: string;
  password: string;
  balance: number;
}

const User = (): Knex.QueryBuilder<User> => knex('users');


