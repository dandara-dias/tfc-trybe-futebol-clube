const validateEmail = (email: string) => {
  const emailRegex = /\S+@\S+\.\S+/;

  if (!email) {
    return {
      status: 401,
      message: 'O campo "email" é obrigatório',
    }
  }

  if (emailRegex.test(email) === false) {
    return {
      status: 401,
      message: 'O email deve ter o formato email@email.com',
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