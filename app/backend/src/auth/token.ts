import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';

const secretKey = fs.readFileSync('jwt.evaluation.key', 'utf8');

const tokenGenerate = (payload: any): string => {
  const token = jwt.sign({payload}, secretKey, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return token;
}

const tokenValidation = (token: string) => {
  try {
    const decode = jwt.verify(token, secretKey);
    return decode;
  } catch (err) {
    return false;
  }
}

export {
  tokenGenerate,
  tokenValidation,
};