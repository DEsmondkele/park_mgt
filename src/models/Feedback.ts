import { Knex } from 'knex';
import knex from '../config/dbconfig';



interface Feedback {
    id: number;
    userId: number;
    message: string;
  
  }
  const Feedback = (): Knex.QueryBuilder<Feedback> => knex('feedback');
  
  export default Feedback;
