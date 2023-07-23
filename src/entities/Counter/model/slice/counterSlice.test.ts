import { DeepPartial } from '@reduxjs/toolkit';
import { CounterShcema } from '../types/CounterShcema';
import { counterReducer, counterSlice, counterActions } from './counterSlice';

describe('counterSlice', () => {
    test('decrement', () => {
        const state: DeepPartial<CounterShcema> = {
            value: 10,
        };

        expect(
            counterReducer(state as CounterShcema, counterActions.decrement)
        ).toEqual({ value: 9 });
    });

    test('increment', () => {
        const state: DeepPartial<CounterShcema> = {
            value: 10,
        };

        expect(
            counterReducer(state as CounterShcema, counterActions.increment)
        ).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({
            value: 1,
        });
    });
});
