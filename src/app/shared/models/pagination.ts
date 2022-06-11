interface IPagination {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export class Pagination implements IPagination {
  count: number = 1;
  next: string = '';
  previous: string = '';
  results: Pokemon[] = [];
}

