import { CounterShcema } from 'entities/Counter';
import { UserShema } from 'entities/User';

export interface StateSchema {
    counter: CounterShcema;
    user: UserShema;
}
