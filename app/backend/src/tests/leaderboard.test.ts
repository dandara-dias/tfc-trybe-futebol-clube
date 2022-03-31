import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/Match';
import Club from '../database/models/Club';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Leaderboard', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Club, 'findAll')
      .resolves([
        {
          "id": 1,
          "clubName": "Avaí/Kindermann"
        },
        {
          "id": 2,
          "clubName": "Bahia"
        }] as any);

    sinon
      .stub(Match, 'findAll')
      .resolves([
        {
          "id": 1,
          "homeTeam": 16,
          "homeTeamGoals": 1,
          "awayTeam": 8,
          "awayTeamGoals": 1,
          "inProgress": 0,
          "homeClub": {
            "clubName": "Avaí/Kindermann"
          },
          "awayClub": {
            "clubName": "Bahia"
          }
        }] as any);
  });

  after(() => {
    (Club.findAll as sinon.SinonStub).restore();
    (Match.findAll as sinon.SinonStub).restore();
  });

  it('A rota deve retornar status 200 e uma lista de classificação', async () => {
    chai
      .request(app)
      .get('/leaderboard')
      .then(function (res){
        expect(res).to.have.status(200);
      })
      .catch(function (err) {
        throw err;
      });
  });
});