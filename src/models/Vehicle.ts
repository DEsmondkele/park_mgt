import { Knex } from 'knex';
import knex from '../config/dbconfig';

interface Vehicle {
    id: number;
    brand: string;
    model: string;
    color: string;
    plateNumber: string;
  }
  
const Vehicle = (): Knex.QueryBuilder<Vehicle> => knex('vehicle');
  
  export default Vehicle;
  