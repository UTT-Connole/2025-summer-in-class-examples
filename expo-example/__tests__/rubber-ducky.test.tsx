import RubberDuckies from '@/app/rubber-duckies';

import { render, userEvent, screen, waitFor } from '@testing-library/react-native';


describe('RubberDuckies screen tests', () => {
    it("should render without crashing", () => {
        render(<RubberDuckies />);
    });

    it("should be able to type in the name field", async () => {
        const user = userEvent.setup();

        render(<RubberDuckies />);

        const nameInput = screen.getByPlaceholderText('Enter your ducky\'s name');

        await user.press(nameInput);
        await user.type(nameInput, 'Ducky McDuckface');
    })

    it('should enable the submit button when the form is filled out', async () => {
        const user = userEvent.setup();

        render(<RubberDuckies />);

        const submitButton = screen.getByText('Complete All Fields')
        expect(submitButton).toBeDisabled();
        const nameInput = screen.getByPlaceholderText('Enter your ducky\'s name');
        const colorInput = screen.getByPlaceholderText('e.g., yellow, #FFD700');
        const duckyTypeInput = screen.getByPlaceholderText('e.g., classic, superhero, animal');

        await user.type(nameInput, 'Ducky McDuckface');
        await user.type(duckyTypeInput, 'superhero');
        await user.type(colorInput, 'yellow');
        const allFieldsValidText = await screen.findByText('All fields are valid!');

        expect(submitButton).toBeEnabled();
        expect(submitButton).toHaveTextContent('✓ Form Complete');


    })
})