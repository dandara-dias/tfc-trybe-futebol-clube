import { Request, Response } from 'express';
import Match from '../database/models/Match';
import { getMatches, getInProgressMatches, getFinishedMatches, postMatch } from '../Services/matchService';

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

const matchPost = async (req: Request, res: Response) => {
  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } = req.body;

  const matchRequisition = {
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    inProgress,
  };

  if (homeTeam === awayTeam) {
    return res.status(401).json({ message: 'It is not possible to create a match with two equal teams'});
  }

  const newMatch = await postMatch(matchRequisition);

  res.status(newMatch.status).json(newMatch.message);
};

const matchFinish = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Match.update({ inProgress: false }, { where: { id } });

  res.status(200).json({ message: 'Finished' });
};

export {
  matchController,
  matchPost,
  matchFinish,
};