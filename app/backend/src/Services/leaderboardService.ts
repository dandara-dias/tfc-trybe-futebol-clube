import { getMatches } from './matchService';
import { getClubs } from './clubService';

const leaderList = (clubs: any) => {
  let leaders: any = [];

  clubs.forEach((club: any) => {
    leaders.push({
      name: club.clubName,
      totalPoints: 0,
      totalGames: 0,
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 0,
      goalsOwn: 0,
      goalsBalance: 0,
      efficiency: 0, 
    });
  });

  return leaders;
};

const matchDrawHome = (match: any, list: any) => {
  list.forEach((itemClub: any) => {
    if (match.homeClub.clubName === itemClub.name) {
      itemClub.totalPoints += 1;
      itemClub.totalGames += 1;
      itemClub.totalDraws += 1;
      itemClub.goalsFavor += match.homeTeamGoals;
      itemClub.goalsOwn += match.awayTeamGoals;
      itemClub.efficiency = +(((itemClub.totalPoints / (itemClub.totalGames * 3)) * 100)).toFixed(2);
    }
  });
}

const matchLossHome = (match: any, list: any) => {
  list.forEach((itemClub: any) => {
    if (match.homeClub.clubName === itemClub.name) {
      itemClub.totalGames += 1;
      itemClub.totalLosses += 1;
      itemClub.goalsFavor += match.homeTeamGoals;
      itemClub.goalsOwn += match.awayTeamGoals;
      itemClub.goalsBalance += (match.homeTeamGoals - match.awayTeamGoals);
      itemClub.efficiency = +(((itemClub.totalPoints / (itemClub.totalGames * 3)) * 100)).toFixed(2);
    }
  });
}

const matchWinHome = (match: any, list: any) => {
  list.forEach((itemClub: any) => {
    if (match.homeClub.clubName === itemClub.name) {
      itemClub.totalPoints += 3;
      itemClub.totalGames += 1;
      itemClub.totalVictories += 1;
      itemClub.goalsFavor += match.homeTeamGoals;
      itemClub.goalsOwn += match.awayTeamGoals;
      itemClub.goalsBalance += (match.homeTeamGoals - match.awayTeamGoals);
      itemClub.efficiency = +(((itemClub.totalPoints / (itemClub.totalGames * 3)) * 100)).toFixed(2);
    }
  });
}

const getBoard = async () => {
  const clubs: any = await getClubs();
  const matches: any = await getMatches();

  const list = leaderList(clubs.message);

  matches.message.forEach((match: any) => {
    if (match.dataValues.inProgress === 0) {
      // se a partida ja terminou, verifica seu resultado

      const goalBalance = match.homeTeamGoals - match.awayTeamGoals;

      // em caso de empate (saldo de gols iguais)
      if (goalBalance === 0) {
        return matchDrawHome(match, list);
      } else if (goalBalance < 0) { // em caso de perda
        return matchLossHome(match, list);
      } else { // em caso de vitoria
        return matchWinHome(match, list);
      }
    }
  });

  const matchDrawAway = (match: any, list: any) => {
    list.forEach((itemClub: any) => {
      if (match.awayClub.clubName === itemClub.name) {
        itemClub.totalPoints += 1;
        itemClub.totalGames += 1;
        itemClub.totalDraws += 1;
        itemClub.goalsFavor += match.awayTeamGoals;
        itemClub.goalsOwn += match.homeTeamGoals;
        itemClub.efficiency = +(((itemClub.totalPoints / (itemClub.totalGames * 3)) * 100)).toFixed(2);
      }
    });
  }

  const matchLossAway = (match: any, list: any) => {
    list.forEach((itemClub: any) => {
      if (match.awayClub.clubName === itemClub.name) {
        itemClub.totalGames += 1;
        itemClub.totalLosses += 1;
        itemClub.goalsFavor += match.awayTeamGoals;
        itemClub.goalsOwn += match.homeTeamGoals;
        itemClub.goalsBalance += (match.awayTeamGoals - match.homeTeamGoals);
        itemClub.efficiency = +(((itemClub.totalPoints / (itemClub.totalGames * 3)) * 100)).toFixed(2);
      }
    });
  }

  const matchWinAway = (match: any, list: any) => {
    list.forEach((itemClub: any) => {
      if (match.awayClub.clubName === itemClub.name) {
        itemClub.totalPoints += 3;
        itemClub.totalGames += 1;
        itemClub.totalVictories += 1;
        itemClub.goalsFavor += match.awayTeamGoals;
        itemClub.goalsOwn += match.homeTeamGoals;
        itemClub.goalsBalance += (match.awayTeamGoals - match.homeTeamGoals);
        itemClub.efficiency = +(((itemClub.totalPoints / (itemClub.totalGames * 3)) * 100)).toFixed(2);
      }
    });
  }

  const classificationList = (list: any) => {
    list.sort((clubA: any, clubB: any) => {
      if (clubA.totalPoints !== clubB.totalPoints) return clubB.totalPoints - clubA.totalPoints;
      if (clubA.totalVictories !== clubB.totalVictories) return clubB.totalVictories - clubA.totalVictories;
      if (clubA.goalsBalance !== clubB.goalsBalance) return clubB.goalsBalance - clubA.goalsBalance;
      if (clubA.goalsFavor !== clubB.goalsFavor) return clubB.goalsFavor - clubA.goalsFavor;
      if (clubA.goalsOwn !== clubB.goalsOwn) return clubB.goalsOwn - clubA.goalsOwn;
      return 0;
    });
  }

  matches.message.forEach((match: any) => {
    if (match.dataValues.inProgress === 0) {
      // se a partida ja terminou, verifica seu resultado

      const goalBalance = match.awayTeamGoals - match.homeTeamGoals;

      // em caso de empate (saldo de gols iguais)
      if (goalBalance === 0) {
        return matchDrawAway(match, list);
      } else if (goalBalance < 0) { // em caso de perda
        return matchLossAway(match, list);
      } else { // em caso de vitoria
        return matchWinAway(match, list);
      }
    }
  });

  classificationList(list);

  return {
    message: list,
    status: 200,
  }
};

export default getBoard;