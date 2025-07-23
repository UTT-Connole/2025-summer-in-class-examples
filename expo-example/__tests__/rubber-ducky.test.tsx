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
})