import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Requisitos 5, 7, 9, 11 e 13', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves({
        id: 1,
        username: 'Admin',
        role: 'admin',
        email: 'admin@admin.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
      } as User);
  });

  after(() => {
    (User.findOne as sinon.SinonStub).restore();
  });

  it('O avaliador verificará se é possível fazer o login com dados corretos', async () => {
    chai
      .request(app)
      .post('/login')
      .send({
        'email': 'admin@admin.com',
        'password': 'secret_admin',
      })
      .then(function (res){
        expect(res).to.have.status(200);
      })
      .catch(function (err) {
        throw err;
      });
  });

  it('O avaliador verificará se fazer o login com um email incorreto retornará status não-autorizado', async () => {
    chai
      .request(app)
      .post('/login')
      .send({
        email: 'admin.com',
        password: 'secret_admin',
      })
      .then(function (res){
        expect(res).to.have.status(401);
      })
      .catch(function (err) {
        throw err;
      });
  });

  it('O avaliador verificará se fazer o login com uma senha incorreta retornará status não-autorizado', async () => {
    chai
      .request(app)
      .post('/login')
      .send({
        email: 'admin@admin.com',
        password: 'senha_invalida',
      })
      .then(function (res){
        expect(res).to.have.status(401);
      })
      .catch(function (err) {
        throw err;
      });
  });

  it('O avaliador verificará se ao tentar fazer o login sem um email retornará status não-autorizado', async () => {
    chai
      .request(app)
      .post('/login')
      .send({
        email: '',
        password: 'secret_admin',
      })
      .then(function (res){
        expect(res).to.have.status(401);
      })
      .catch(function (err) {
        throw err;
      });
  });

  it('O avaliador verificará se ao tentar fazer login sem senha retornará status não-autorizado', async () => {
    chai
      .request(app)
      .post('/login')
      .send({
        email: 'admin@admin.com',
        password: '',
      })
      .then(function (res){
        expect(res).to.have.status(401);
      })
      .catch(function (err) {
        throw err;
      });
  });
});

describe('Requisito 14', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves({
        id: 1,
        username: 'Admin',
        role: 'admin',
        email: 'admin@admin.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
      } as User);
  });

  after(() => {
    (User.findOne as sinon.SinonStub).restore();
  });

  it('O avaliador verificará se tentar bater na rota com um token válido, o mesmo retornará o tipo de usuário', async () => {
    chai
      .request(app)
      .get('/login/validate')
      .set({
        authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2NDgzMjM2MDAsImV4cCI6MTY0ODkyODQwMH0.4yB0P7foau8rTAQsnU-sZcxniGlS4Nk-RY9JvO2aFCs'
      })
      .then(function (res){
        expect(res).to.have.status(200);
      })
      .catch(function (err) {
        throw err;
      });
  });
});