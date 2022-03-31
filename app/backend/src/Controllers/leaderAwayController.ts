import { Request, Response } from 'express';
import getAway from '../Services/leaderAwayService';

const awayController = async (req: Request, res: Response) => {
  const away = await getAway();

  res.status(away.status).json(away.message);
};

export default awayController;