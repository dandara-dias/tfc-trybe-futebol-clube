import { tokenGenerate } from '../auth/token';
import validateLogin from '../auth/loginValidation';
import User from '../database/models/User';
import * as bcrypt from 'bcryptjs';

const getUserLogin = async (email: string, password: string) => {
  const authLogin = validateLogin(email, password);
  const getUser = await User.findOne({ where: { email } });
  const passwordMatch = await bcrypt.compare(password, getUser!.password);

  const token = tokenGenerate(getUser);

  if (authLogin) {
    return authLogin;
  }

  const user = {
    id: getUser?.id,
    username: getUser?.username,
    role: getUser?.role,
    email: getUser?.email,
  }

  if (passwordMatch) {
    return {
      message: {
        user,
        token,
      },
      status: 200,
    }
  }
}

export default getUserLogin;