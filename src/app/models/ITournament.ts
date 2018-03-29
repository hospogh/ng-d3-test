export interface ITournament {
  id: number;
  parentId: number;
  value: number;
}

export interface ITournamentMapped {
  value: number;
  children?: ITournamentMapped[];
}
