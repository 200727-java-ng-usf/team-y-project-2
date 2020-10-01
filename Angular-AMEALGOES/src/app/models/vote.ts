import { meal } from './meal'
import { Principal } from './principal'
import { restaurant } from './restaurant'

export class Vote {
    restaurant: number //restaurant id, get resturant from api via id
    meal: number //meal id, get meal from api via id
    user: number //user id
    vote: number //0 or 1
}