
import { Request, Response } from 'express';
import * as userService from '../service/UserService';
import bcrypt from 'bcrypt';
import { generateToken } from '../config/authUtils';
import { UserCreateDto } from '../dto/userCreateDto';

export const createUser = async (req: Request, res: Response) => {
    try {
      const userData: UserCreateDto = req.body;
  
      if ( !userData ||!userData.username || !userData.password || !userData.balance ===undefined ) {
        return res.status(400).json({ error: 'Invalid data' });
      }
  
      const newUser = await userService.createUser(userData);
      res.status(201).send({ data: newUser, message: 'User created successfully' });
    } catch (error) {
      console.error('Error creating user:');
      res.status(500).json({ error: 'User creation failed' });
    }
  };
  
  export const loginUser = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const user = await userService.findUserByUsername(username);
  
      if (!user) {
        return res.status(401).json({ error: 'Authentication failed' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Authentication failed' });
      }
  
      const token = generateToken(user);
      res.json({ token });
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).json({ error: 'Login failed' });
    }
  };