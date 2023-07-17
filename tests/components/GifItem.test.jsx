import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe("test on <GifItem.jsx />", () => {
  const url = `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a67ac30c-fe21-4e97-8dad-ffa8b2670167/dch868l-316e23fd-b0cc-4ccb-ac88-eb71c06b87c3.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9hNjdhYzMwYy1mZTIxLTRlOTctOGRhZC1mZmE4YjI2NzAxNjcvZGNoODY4bC0zMTZlMjNmZC1iMGNjLTRjY2ItYWM4OC1lYjcxYzA2Yjg3YzMuZ2lmIn1dXX0.PHPWw8pPy0L9gxxM5j1qCTs6F5YcEOQcgDMqUxVGHGI`;
  const title = "Yang Xiao Long";

  test("should match with the snapshot", () => {
    const { container } = render(<GifItem url={url} title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("should show the image with the URL and Alt indicated", () => {
    render(<GifItem url={url} title={title} />);
    // screen.debug();
    expect(screen.getByRole("img").alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should show the title with the component", () => {
    render(<GifItem url={url} title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
