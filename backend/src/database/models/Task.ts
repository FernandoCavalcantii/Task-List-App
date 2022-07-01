import { DataTypes, Model } from 'sequelize';
import { Status } from '../../protocols/types';
import db from '.';

class Task extends Model {
  public id!: number;
  public name!: string;
  public description: string;
  public status: Status;
}

Task.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING(55),
  description: DataTypes.STRING(200),
  status: DataTypes.STRING(11)
}, {
  sequelize: db,
  modelName: 'Tasks',
  timestamps: false,
});

export default Task;