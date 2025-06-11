import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Stephen from "./page";

describe("Stephen Page", () => {
  it("renders the main heading", () => {
    render(<Stephen />);
    const heading = screen.getByRole("heading", { name: /Stephen/i });
    expect(heading).toBeInTheDocument();
  });
});
