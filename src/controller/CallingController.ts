import { Request, Response } from 'express';
import CallingService from '../service/CallingService';

class CallingController {
  static async initiateCall(req: Request, res: Response): Promise<void> {
    try {
      const phoneNumber: string = req.body.phoneNumber; 
      const callingService = new CallingService();
      const callMessage = await callingService.initiateCall(phoneNumber);

      res.status(200).json({ message: callMessage });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default CallingController;
