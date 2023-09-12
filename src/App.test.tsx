// App.test.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("test", () => {
  test("first unit test", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });
});
