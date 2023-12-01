import { Knex } from 'knex';
import knex from '../config/dbconfig';

interface BiometricAuth {
    id: number;
    userId: number;
    biometricType: string; // Fingerprints, Face, etc.
    
  }

  const BiometricAuth = (): Knex.QueryBuilder<BiometricAuth> => knex('biometricAuth');
  
  export default BiometricAuth;
