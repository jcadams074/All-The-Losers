import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NflService, Team } from '../../services/nfl.service';
import { MlbService } from '../../services/mlb.service';
import { NbaService } from '../../services/nba.service';
import { NcaaFootballService } from '../../services/ncaafb.service';
import { NcaaMbbService } from '../../services/ncaambb.service';

@Component({
  selector: 'app-who-lost-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './who-lost-page.component.html',
  styleUrls: ['./who-lost-page.component.scss']
})
export class WhoLostPageComponent implements OnInit {

  nflGames: { loser: string; loserLogo: string; opponent: string; opponentLogo: string }[] = [];
  mlbGames: { loser: string; loserLogo: string; opponent: string; opponentLogo: string }[] = [];
  nbaGames: { loser: string; loserLogo: string; opponent: string; opponentLogo: string }[] = [];
  ncaaFbGames: { loser: string; loserLogo: string; opponent: string; opponentLogo: string }[] = [];
  ncaaMbbGames: { loser: string; loserLogo: string; opponent: string; opponentLogo: string }[] = [];

  constructor(private nflService: NflService, private mlbService: MlbService, private nbaService: NbaService, private ncaaFbService: NcaaFootballService, private ncaaMbbService: NcaaMbbService) {}

  ngOnInit(): void {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0]; // Get the date in YYYY-MM-DD format

    // Fetch NFL games
    this.nflService.getGames().subscribe(
      (data) => {
        this.nflGames = data.events
          .filter((event: { date: string; status: { type: { completed: any; }; }; }) => {
            const gameDate = event.date.split('T')[0]; // Assuming event.date is the date of the game
            return gameDate === todayString && event.status.type.completed; // Check for completed games
          })
          .map((event: { competitions: { competitors: Team[]; }[]; }) => {
            const competitors: Team[] = event.competitions[0]?.competitors;

            if (competitors && competitors.length === 2) {
              const loserTeam = competitors.find(team => team.winner === false);
              const opponentTeam = competitors.find(team => team.winner === true);

              return {
                loser: loserTeam?.team.displayName,
                opponent: opponentTeam?.team.displayName,
                loserLogo: loserTeam?.team.logo,
                opponentLogo: opponentTeam?.team.logo
              };
            }

            return null;
          })
          .filter((game: null) => game !== null);
      },
      (error) => {
        console.error('Error fetching NFL games:', error);
      }
    );

    // Fetch MLB games
    this.mlbService.getGames().subscribe(
      (data) => {
        this.mlbGames = data.events
          .filter((event: { date: string; status: { type: { completed: any; }; }; }) => {
            const gameDate = event.date.split('T')[0]; // Assuming event.date is the date of the game
            return gameDate === todayString && event.status.type.completed; // Check for completed games
          })
          .map((event: { competitions: { competitors: Team[]; }[]; }) => {
            const competitors: Team[] = event.competitions[0]?.competitors;

            if (competitors && competitors.length === 2) {
              const loserTeam = competitors.find(team => team.winner === false);
              const opponentTeam = competitors.find(team => team.winner === true);

              return {
                loser: loserTeam?.team.displayName,
                opponent: opponentTeam?.team.displayName,
                loserLogo: loserTeam?.team.logo,
                opponentLogo: opponentTeam?.team.logo
              };
            }

            return null;
          })
          .filter((game: null) => game !== null);
      },
      (error) => {
        console.error('Error fetching MLB games:', error);
      }
    );

    this.nbaService.getGames().subscribe(
      (data) => {
        this.nbaGames = data.events
          .filter((event: { date: string; status: { type: { completed: any; }; }; }) => {
            const gameDate = event.date.split('T')[0]; // Assuming event.date is the date of the game
            return gameDate === todayString && event.status.type.completed; // Check for completed games
          })
          .map((event: { competitions: { competitors: Team[]; }[]; }) => {
            const competitors: Team[] = event.competitions[0]?.competitors;

            if (competitors && competitors.length === 2) {
              const loserTeam = competitors.find(team => team.winner === false);
              const opponentTeam = competitors.find(team => team.winner === true);

              return {
                loser: loserTeam?.team.displayName,
                opponent: opponentTeam?.team.displayName,
                loserLogo: loserTeam?.team.logo,
                opponentLogo: opponentTeam?.team.logo
              };
            }

            return null;
          })
          .filter((game: null) => game !== null);
      },
      (error) => {
        console.error('Error fetching NBA games:', error);
      }
    );

    this.ncaaFbService.getGames().subscribe(
      (data) => {
        this.ncaaFbGames = data.events
          .filter((event: { date: string; status: { type: { completed: any; }; }; }) => {
            const gameDate = event.date.split('T')[0]; // Assuming event.date is the date of the game
            return gameDate === todayString && event.status.type.completed; // Check for completed games
          })
          .map((event: { competitions: { competitors: Team[]; }[]; }) => {
            const competitors: Team[] = event.competitions[0]?.competitors;

            if (competitors && competitors.length === 2) {
              const loserTeam = competitors.find(team => team.winner === false);
              const opponentTeam = competitors.find(team => team.winner === true);

              return {
                loser: loserTeam?.team.displayName,
                opponent: opponentTeam?.team.displayName,
                loserLogo: loserTeam?.team.logo,
                opponentLogo: opponentTeam?.team.logo
              };
            }

            return null;
          })
          .filter((game: null) => game !== null);
      },
      (error) => {
        console.error('Error fetching NCAA FB games:', error);
      }
    );

    this.ncaaMbbService.getGames().subscribe(
      (data) => {
        this.ncaaMbbGames = data.events
          .filter((event: { date: string; status: { type: { completed: any; }; }; }) => {
            const gameDate = event.date.split('T')[0]; // Assuming event.date is the date of the game
            return gameDate === todayString && event.status.type.completed; // Check for completed games
          })
          .map((event: { competitions: { competitors: Team[]; }[]; }) => {
            const competitors: Team[] = event.competitions[0]?.competitors;

            if (competitors && competitors.length === 2) {
              const loserTeam = competitors.find(team => team.winner === false);
              const opponentTeam = competitors.find(team => team.winner === true);

              return {
                loser: loserTeam?.team.displayName,
                opponent: opponentTeam?.team.displayName,
                loserLogo: loserTeam?.team.logo,
                opponentLogo: opponentTeam?.team.logo
              };
            }

            return null;
          })
          .filter((game: null) => game !== null);
      },
      (error) => {
        console.error('Error fetching NCAA MBB games:', error);
      }
    );
  }
}

