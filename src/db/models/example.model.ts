import { Model } from "objection";

export class Example extends Model {
  static tableName = 'example';

  id!: number;
  value!: string;
}
