import { Request, Response } from 'express';
import getClubs from '../Services/clubService';

const clubController = async (req: Request, res: Response) => {
  const getClub = await getClubs();

  res.status(getClub.status).json(getClub.message);
};

export default clubController;