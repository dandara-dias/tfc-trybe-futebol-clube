import { Request, Response } from 'express';
import getMatches from '../Services/matchService';

const matchController = async (req: Request, res: Response) => {
  const getAllMatches = await getMatches();

  res.status(getAllMatches.status).json(getAllMatches.message);
};

export default matchController;