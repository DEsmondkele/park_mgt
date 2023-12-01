import { Request, Response } from 'express';
import QRService from '../service/QRService';

class QRController {
  static async generateQRCode(req: Request, res: Response): Promise<void> {
    try {
      const vehicleDetails = req.body.vehicleDetails; 

     
      const qrService = new QRService();
      const generatedQR = await qrService.generateQRCode(vehicleDetails);

      res.status(200).json({ qrCode: generatedQR });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async scanQRCode(req: Request, res: Response): Promise<void> {
    try {
      const qrData: string = req.body.qrData; 
      const qrService = new QRService();
      const parsedData = await qrService.scanQRCode(qrData);

      res.status(200).json(parsedData);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default QRController;
