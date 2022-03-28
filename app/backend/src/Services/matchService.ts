import Club from '../database/models/Club';
import Match from '../database/models/Match';

const getMatches = async () => {
  const matches = await Match.findAll({
    include: [
      {
        model: Club,
        as: 'homeClub',
        attributes: ['clubName'],
      },
      {
        model: Club,
        as: 'awayClub',
        attributes: ['clubName'],
      },
    ],
  });

  return {
    message: matches,
    status: 200,
  }
};

export default getMatches;