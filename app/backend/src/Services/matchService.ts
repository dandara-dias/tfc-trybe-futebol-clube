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

const getInProgressMatches = async () => {
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
    where: {
      inProgress: 1,
    },
  });

  return {
    message: matches,
    status: 200,
  }
};

const getFinishedMatches = async () => {
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
    where: {
      inProgress: 0,
    },
  });

  return {
    message: matches,
    status: 200,
  }
};

export {
  getMatches,
  getInProgressMatches,
  getFinishedMatches,
};