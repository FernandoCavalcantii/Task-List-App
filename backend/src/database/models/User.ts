import { DataTypes, Model } from 'sequelize';
import db from '.';

class User extends Model {
  public id!: number;
  public name!: string;
  public password: string;
  public admin: boolean;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  admin: {
    type: DataTypes.BOOLEAN,
  }
}, {
  sequelize: db,
  modelName: 'Users',
  timestamps: false,
});

export default User;