import { Request, Response } from 'express';
import { getClubs, getClubById } from '../Services/clubService';

const clubController = async (req: Request, res: Response) => {
  const getClub = await getClubs();

  res.status(getClub.status).json(getClub.message);
};

const clubId = async (req: Request, res: Response) => {
  const { id } = req.params;

  const getId = await getClubById(parseInt(id, 10));

  res.status(getId.status).json(getId.message);
};

export {
  clubController,
  clubId,
};