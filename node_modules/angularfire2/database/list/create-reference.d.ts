import { DatabaseQuery, AngularFireList } from '../interfaces';
import { AngularFireDatabase } from '../database';
export declare function createListReference<T>(query: DatabaseQuery, afDatabase: AngularFireDatabase): AngularFireList<T>;
