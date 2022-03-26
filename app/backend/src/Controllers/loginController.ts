import { Request, Response } from 'express';
import { getUserLogin, getRole } from '../Services/loginService';

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const getUser = await getUserLogin(email, password);

  if (getUser.status === 200) {
    return res.status(getUser.status).json(getUser.message);
  }

  res.status(getUser.status).json({ message: getUser.message });
};

const roleController = async (req: Request, res: Response) => {
  const token: any = req.headers.authorization;

  const role = await getRole(token);

  res.status(role.status).json(role.message);
}

export {
  loginController,
  roleController,
};
