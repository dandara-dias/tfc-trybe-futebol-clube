import { Request, Response } from 'express';
import getUserLogin from '../Services/loginService';

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const getUser = await getUserLogin(email, password);

  res.status(getUser.status).json(getUser.message);
};

export default loginController;
