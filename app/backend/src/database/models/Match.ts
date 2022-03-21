import { Model, DataTypes } from 'sequelize';
import db from '.';
import Club from './Club';

class Match extends Model {

}

Match.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  home_team: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Club',
      key: 'id',
    },
  },
  home_team_goals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  away_team: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Club',
      key: 'id',
    },
  },
  away_team_goals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  in_progress: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
  modelName: 'Match',
});

Match.belongsTo(Club, { foreignKey: 'home_team', as: 'home_team' });
Match.belongsTo(Club, { foreignKey: 'away_team', as: 'away_team' });

export default Match;
