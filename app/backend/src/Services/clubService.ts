import Club from '../database/models/Club';

const getClubs = async () => {
  const getClub = await Club.findAll();

  return {
    message: getClub,
    status: 200,
  };
};

export default getClubs;