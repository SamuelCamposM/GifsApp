import { render, screen, fireEvent } from "@testing-library/react";
import GifApp from "../src/GifApp";

describe("test on <GifApp.jsx/>", () => {
  const category = "Yang Xiao Long";
  test("should add a new category", () => {
    render(<GifApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.change(input, { target: { value: category } });
    fireEvent.submit(form);
    expect(screen.getByText(category)).toBeTruthy();
  });
  test("shouldn't add a new category if already exist the same", () => {
    render(<GifApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.change(input, { target: { value: category } });
    fireEvent.submit(form);
    fireEvent.change(input, { target: { value: category } });
    fireEvent.submit(form);
    expect(screen.getAllByText(category).length).toBe(1);
  });
});
