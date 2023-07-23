import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterShcema } from '../../types/CounterShcema';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterShcema) => counter.value
);
