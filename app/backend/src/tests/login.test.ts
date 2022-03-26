import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Requisitos 5, 7 e 8', () => {
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
});
