import { DataTypes, Model } from 'sequelize';
import { Status } from '../../protocols/types';
import db from '.';

class Task extends Model {
  public id!: number;
  public name!: string;
  public description: string;
  public status: Status;
  public userId: number
}

Task.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id',
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'Tasks',
  timestamps: false,
});

export default Task;