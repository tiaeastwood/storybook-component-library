import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Header, type User } from "./Header";

const mockUser: User = { name: "Joe Bloggs" };

describe("Header", () => {
  it("Renders the logo", () => {
    render(<Header />);
    const logoContainer = screen.getByTestId("logo-container");
    const svg = logoContainer.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("When logged out, it renders the header with log in and sign up buttons", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign up/i })
    ).toBeInTheDocument();
  });

  it("When logged in, it renders the welcome message and log out button", () => {
    render(<Header user={mockUser} />);
    expect(
      screen.queryByRole("button", { name: /log in/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /sign up/i })
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Log out/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Welcome, /i)).toBeInTheDocument();
    expect(screen.getByText(`${mockUser.name}`)).toBeInTheDocument();
  });
});
