import ParkingSpace from '../models/ParkingSpace';


class GeolocationService {
    getAvailableParkingSpaces(location: string): Promise<ParkingSpace[]> {
    
      const parkingSpaces: ParkingSpace[] = [
        { id: 1, location: 'Parking A', availability: true },
        { id: 2, location: 'Parking B', availability: false },
      
      ];
      return Promise.resolve(parkingSpaces);
    }
  }
  
  export default GeolocationService; 

  