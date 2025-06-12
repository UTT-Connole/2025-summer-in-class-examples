import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Stephen from './page'
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event';

describe('Test that will pass', () => {
    it('should pass', () => {
        expect(true).toBe(true);
    });

    test('Stephen is a header on the page', () => {

        render(<Stephen />);
        const headerElement = screen.getByRole('heading', {
            name: /stephen/i,
        });

        expect(headerElement).toBeInTheDocument();
    })

    test('When clicked the header should be removed', async () => {
        const user = userEvent.setup();
        render(<Stephen />);
        const headerElement = screen.getByRole('heading', {
            name: /stephen/i,
        });

        user.click(headerElement);
        await waitForElementToBeRemoved(headerElement);

    })
})