import "@testing-library/jest-dom";

import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import Home from "./page";
import userEvent from "@testing-library/user-event";

describe("Home Page", () => {
  it("renders the main heading", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    ) as jest.Mock;

    const jsx = await Home();
    render(jsx);
    const heading = screen.getByRole("heading", { name: /BRAYDEN WAS HERE/i });
    expect(heading).toBeInTheDocument();
  });

  it("removes the main heading when I click on it", async () => {
    const user = userEvent.setup();
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    ) as jest.Mock;

    const jsx = await Home();
    render(jsx);
    const heading = screen.getByRole("heading", {
      name: /BRAYDEN WAS HERE/i,
    });
    waitForElementToBeRemoved(heading);

    await user.click(heading);
  });
});
