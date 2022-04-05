import { Request, Response } from 'express';
import getBoard from '../Services/leaderboardService';

const leaderboardController = async (req: Request, res: Response) => {
  const leaderboard = await getBoard();

  res.status(leaderboard.status).json(leaderboard.message);
};

export default leaderboardController;