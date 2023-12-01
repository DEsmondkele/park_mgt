import { Request, Response } from 'express';
import GeolocationService from '../service/GeolocationService';

class GeolocationController {
  static async getAvailableParkingSpaces(req: Request, res: Response): Promise<void> {
    try {
      const location: string = req.query.location as string;
      const geolocationService = new GeolocationService();
      const availableParkingSpaces = await geolocationService.getAvailableParkingSpaces(location);

      res.status(200).json(availableParkingSpaces);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default GeolocationController;
