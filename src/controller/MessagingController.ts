import { Request, Response } from 'express';
import MessagingService from '../service/MessagingService';

class MessagingController {
  static createUser(arg0: string, createUser: any) {
      throw new Error('Method not implemented.');
  }
  static loginUser(arg0: string, loginUser: any) {
      throw new Error('Method not implemented.');
  }
  static async sendMessage(req: Request, res: Response): Promise<void> {
    try {
      const message: string = req.body.message; 

  
      const messagingService = new MessagingService();
      await messagingService.sendMessage(message);

      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getMessages(req: Request, res: Response): Promise<void> {
    try {
    
      const messagingService = new MessagingService();
      const messages = await messagingService.getMessages();

      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default MessagingController;
