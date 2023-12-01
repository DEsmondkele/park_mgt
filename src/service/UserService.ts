import db from '../config/dbconfig';
import { User } from '../models/user';
import bcrypt from 'bcrypt';
import { generateToken } from '../config/authUtils';

export const createUser = async (user: User) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    const [userId] = await db('user').insert(user);
    const token = generateToken({ id: userId, username: user.username });
    return { userId, token };
  };
  
  export const findUserByUsername = async (username: string): Promise<User | null> => {
    const user = await db('user').where('username', username).first();
    return user || null;
  };