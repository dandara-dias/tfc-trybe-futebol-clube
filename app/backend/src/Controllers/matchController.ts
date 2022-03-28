import { Request, Response } from 'express';
import { getMatches, getInProgressMatches, getFinishedMatches } from '../Services/matchService';

const matchController = async (req: Request, res: Response) => {
  const { inProgress } = req.query;

  if (inProgress === 'true') {
    const progress = await getInProgressMatches();
    return res.status(progress.status).json(progress.message);
  }

  if (inProgress === 'false') {
    const finished = await getFinishedMatches();
    return res.status(finished.status).json(finished.message);
  }

  const getAllMatches = await getMatches();

  res.status(getAllMatches.status).json(getAllMatches.message);
};

export default matchController;