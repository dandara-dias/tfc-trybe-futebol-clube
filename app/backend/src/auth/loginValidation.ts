const validateEmail = (email: string) => {
  const emailRegex = /\S+@\S+\.\S+/;

  if (!email) {
    return {
      status: 401,
      message: 'All fields must be filled',
    }
  }

  if (emailRegex.test(email) === false) {
    return {
      status: 401,
      message: 'Incorrect email or password',
    };
  }
}

const validatePassword = (password: string) => {
  if (!password) {
    return {
      status: 401,
      message: 'O campo "password é obrigatório',
    }
  }

  if (password.length < 6) {
    return {
      status: 401,
      message: 'O password deve ter pelo menos 6 caracteres',
    }
  }
}

const validateLogin = (email: string, password: string) => {
  const authEmail = validateEmail(email);
  const authPassword = validatePassword(password);

  if (authEmail) return authEmail;
  if (authPassword) return authPassword;
}

export default validateLogin;