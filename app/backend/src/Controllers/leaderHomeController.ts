import { Request, Response } from 'express';
import getHome from '../Services/leaderHomeService';

const homeController = async (req: Request, res: Response) => {
  const home = await getHome();

  res.status(home.status).json(home.message);
};

export default homeController;