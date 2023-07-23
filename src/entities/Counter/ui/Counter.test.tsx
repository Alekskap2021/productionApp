import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { renderComponent } from 'shared/config/tests/renderComponent/renderComponent';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Test render', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('Increment', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        userEvent.click(screen.getByTestId('increment-btn'));

        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('Decrement', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        userEvent.click(screen.getByTestId('decrement-btn'));

        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
