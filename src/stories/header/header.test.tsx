import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { Header } from "./Header";

describe("Header", () => {
  it("When logged out, it renders the header with log in and sign up buttons", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /aaaaaaa/i })
    ).toBeInTheDocument();
  });
});
