import { Request, Response } from 'express';
import PushNotificationService from '../service/PushNotificationService';

class PushNotificationController {
  static async sendNotification(req: Request, res: Response): Promise<void> {
    try {
      const { deviceToken, message } = req.body; 
    
      const pushNotificationService = new PushNotificationService();
      await pushNotificationService.sendNotification(deviceToken, message);

      res.status(200).json({ message: 'Notification sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default PushNotificationController;
