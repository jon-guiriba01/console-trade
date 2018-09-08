import { DatabaseQuery, AngularFireObject } from '../interfaces';
import { AngularFireDatabase } from '../database';
export declare function createObjectReference<T>(query: DatabaseQuery, afDatabase: AngularFireDatabase): AngularFireObject<T>;
