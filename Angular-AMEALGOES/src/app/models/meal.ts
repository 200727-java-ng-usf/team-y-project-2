import { restaurant } from './restaurant';

export class meal {
    id: number;
    numVotes: number;
    finalRestaurant: String;
    restaurants: restaurant[];
    voted: String;
}