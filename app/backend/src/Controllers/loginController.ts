import { Request, Response } from 'express';
import getUserLogin from '../Services/loginService';

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const getUser = await getUserLogin(email, password);

  if (getUser.status === 200) {
    return res.status(getUser.status).json(getUser.message);
  }

  res.status(getUser.status).json({ message: getUser.message });
};

export default loginController;
