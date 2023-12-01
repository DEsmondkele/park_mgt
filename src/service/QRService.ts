import QRCode from 'qrcode';
import db from '../config/dbconfig';

class QRService {
  async generateQRCode(vehicleDetails: any): Promise<string> {
    try {
      const plateNumber = vehicleDetails.plateNumber; // Assuming plate number is present in vehicleDetails
      const qrData = JSON.stringify(vehicleDetails);

      // Generate QR code data URL
      const generatedQR = await QRCode.toDataURL(qrData);

      // Save QR code along with vehicle details in the database
      await db('vehicle').insert({ plate_number: plateNumber, qr_code: generatedQR });

      return generatedQR;
    } catch (error) {
      throw new Error('Failed to generate QR Code');
    }
  }

  async scanQRCode(qrData: string): Promise<any> {
    try {
      const parsedData = JSON.parse(qrData); // Parse QR code data
      return parsedData;
    } catch (error) {
      throw new Error('Invalid QR Code');
    }
  }
}

export default QRService;
