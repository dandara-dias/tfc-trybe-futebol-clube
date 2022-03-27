import Club from '../database/models/Club';

const getClubs = async () => {
  const getClub = await Club.findAll();

  return {
    message: getClub,
    status: 200,
  };
};

const getClubById = async (id: number) => {
  const clubById = await Club.findOne({ where: { id } });

  return {
    message: clubById,
    status: 200,
  };
};

export {
  getClubs,
  getClubById,
};