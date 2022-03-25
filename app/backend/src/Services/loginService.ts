import * as bcrypt from 'bcryptjs';
import { tokenGenerate } from '../auth/token';
import validateLogin from '../auth/loginValidation';
import User from '../database/models/User';

const getSerializedUser = (user: any) => ({
  id: user.id,
  username: user.username,
  role: user.role,
  email: user.email,
});

const returnUser = async (password: string, getUser: any) => {
  const passwordMatch = await bcrypt.compare(password, getUser.password);
  const user = getSerializedUser(getUser);
  const token = tokenGenerate(getUser);

  if (passwordMatch) {
    return {
      message: {
        user,
        token,
      },
      status: 200,
    };
  }

  return {
    message: 'Not found',
    status: 401,
  };
};

const getUserLogin = async (email: string, password: string):
Promise<{ message: any; status: number; }> => {
  const authLogin = validateLogin(email, password);
  const getUser = await User.findOne({ where: { email } });

  if (authLogin) {
    return authLogin;
  }

  if (getUser) {
    return returnUser(password, getUser);
  }

  return {
    message: 'Not found',
    status: 401,
  };
};

export default getUserLogin;
