import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/Match';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Requisito 18', () => {
  let chaiHttpResponse: Response;

  const matchs = [
    {
      "id": 1,
      "homeTeam": 16,
      "homeTeamGoals": 1,
      "awayTeam": 8,
      "awayTeamGoals": 1,
      "inProgress": 0,
      "homeClub": {
        "clubName": "São Paulo"
      },
      "awayClub": {
        "clubName": "Grêmio"
      }
    },
    {
      "id": 41,
      "homeTeam": 16,
      "homeTeamGoals": 2,
      "awayTeam": 9,
      "awayTeamGoals": 0,
      "inProgress": 1,
      "homeClub": {
        "clubName": "São Paulo"
      },
      "awayClub": {
        "clubName": "Internacional"
      }
    }
  ];

  before(async () => {
    sinon
      .stub(Match, 'findAll')
      .resolves(matchs as any);
  });

  after(() => {
    (Match.findAll as sinon.SinonStub).restore();
  })

  it('A rota deve retornar status 200 e uma lista de partidas sem filtros', async () => {
    chai
      .request(app)
      .get('/matchs')
      .then(function (res){
        expect(res).to.have.status(200);
        expect(res.body).to.be.equal(matchs);
      })
      .catch(function (err) {
        throw err;
      });
  });

  it('A rota deve retornar status 200 e uma lista de partidas em progresso', async () => {
    chai
      .request(app)
      .get('/matchs?inProgress=true')
      .then(function (res){
        expect(res).to.have.status(200);
        expect(res.body).to.be.equal(matchs[1]);
      })
      .catch(function (err) {
        throw err;
      });
  });

  it('A rota deve retornar status 200 e uma lista de partidas finalizadas', async () => {
    chai
      .request(app)
      .get('/matchs?inProgress=false')
      .then(function (res){
        expect(res).to.have.status(200);
        expect(res.body).to.be.equal(matchs[0]);
      })
      .catch(function (err) {
        throw err;
      });
  });

  it('Verifica que é possível salvar uma partida com o status de inProgress como true no banco de dados', async () => {
    const newMatch = {
      "homeTeam": 16,
      "awayTeam": 8,
      "homeTeamGoals": 2,
      "awayTeamGoals": 2,
      "inProgress": true
    }

    chai
      .request(app)
      .post('/matchs')
      .send(newMatch)
      .then(function (res){
        expect(res).to.have.status(201);
        expect(res.body).to.be.equal(newMatch);
      })
      .catch(function (err) {
        throw err;
      });
  });
});