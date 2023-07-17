import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock("../../src/hooks/useFetchGifs");
describe("Test on <GifGrid.jsx/>", () => {
  const category = "Valorant";

  test("should show de loading initially", () => {
    useFetchGifs.mockReturnValue({
      dataGifs: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });
  test("should show items when the dataGifs has been loaded 'useFetchGifs'", () => {
    const gifs = [
      {
        id: "ABC",
        title: "madoka",
        url: "https://madoka.jpg",
      },
      {
        id: "123",
        title: "valorant",
        url: "https://valorant.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      dataGifs: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
