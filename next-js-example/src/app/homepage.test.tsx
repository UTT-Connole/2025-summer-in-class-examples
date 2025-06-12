import { render, screen } from '@testing-library/react';
import Home from './page'
import "@testing-library/jest-dom";

describe('Homepage Tests', () => {

    it('should have BRAYDEN WAS HERE', async () => {
        const jsx = await Home()
        render(jsx);

        const headerElement = screen.getByRole('heading', {
            name: /BRAYDEN WAS HERE/i,
        });
        expect(headerElement).toBeInTheDocument();
    })

})
