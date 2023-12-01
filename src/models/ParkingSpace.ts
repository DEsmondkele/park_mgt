import { Knex } from 'knex';
import knex from '../config/dbconfig';


interface ParkingSpace {
    id: number;
    location: string;
    availability: boolean;
  }
  const ParkingSpace = (): Knex.QueryBuilder<ParkingSpace> => knex('parkingSpace');

  export default ParkingSpace;
  