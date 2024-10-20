import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NflService, Team } from '../../services/nfl/nfl.service';

@Component({
  selector: 'app-who-lost-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './who-lost-page.component.html',
  styleUrl: './who-lost-page.component.scss'
})
export class WhoLostPageComponent implements OnInit {

  games: { loser: string; loserLogo: string; opponent: string; opponentLogo: string }[] = [];

  constructor(private nflService: NflService){}

  ngOnInit(): void {
    this.nflService.getGames().subscribe(
      (data) => {
        const today = new Date();
        const todayString = today.toISOString().split('T')[0]; // Get the date in YYYY-MM-DD format
  
        this.games = data.events
          .filter((event: { date: string; status: { type: { completed: any; }; }; }) => {
            // Ensure there's a date to check against and filter for today's date
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
        console.error('Error fetching games:', error);
      }
    );
  }
}
