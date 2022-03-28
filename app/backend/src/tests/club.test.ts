import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Club from '../database/models/Club';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Requisito 16', () => {
  let chaiHttpResponse: Response;

  const clubs = [
    {
      "id": 1,
      "clubName": "Avaí/Kindermann"
    },
    {
      "id": 2,
      "clubName": "Bahia"
    },
    {
      "id": 3,
      "clubName": "Botafogo"
    },
  ];

  before(async () => {
    sinon
      .stub(Club, 'findAll')
      .resolves(
        clubs as any
      );
  });

  after(() => {
    (Club.findAll as sinon.SinonStub).restore();
  });

  it('Deve ser uma rota GET com resposta com status 200 e com um json contendo o retorno', async () => {
    chai
      .request(app)
      .get('/clubs')
      .then(function (res){
        expect(res).to.have.status(200);
        expect(res.body).to.be.equal(clubs);
      })
      .catch(function (err) {
        throw err;
      });
  });
});

describe('Requisito 17', () => {
  let chaiHttpResponse: Response;

  const clubById = [
    {
      "id": 1,
      "clubName": "Avaí/Kindermann"
    },
    {
      "id": 2,
      "clubName": "Bahia"
    },
  ];

  before(async () => {
    sinon
      .stub(Club, 'findOne')
      .resolves(
        clubById as any
      );
  });

  after(() => {
    (Club.findOne as sinon.SinonStub).restore();
  });

  it('Deve ser uma rota GET com resposta com status 200 e com um json contendo o retorno', async () => {
    chai
      .request(app)
      .get('/clubs/2')
      .then(function (res){
        expect(res).to.have.status(200);
        expect(res.body).to.be.equal(clubById[1]);
      })
      .catch(function (err) {
        throw err;
      });
  });
});