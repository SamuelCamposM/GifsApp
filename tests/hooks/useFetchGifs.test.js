import { renderHook, waitFor } from "@testing-library/react";
import useFetchGifs from "../../src/hooks/useFetchGifs";

describe("Test on useFetchGifs.js", () => {
  test("should return the initial state", () => {
    const { result } = renderHook(() => useFetchGifs("Valorant"));
    const { isLoading, dataGifs } = result.current;
    expect(dataGifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
    // useFetchGifs();
  });
  test("should return an images array", async () => {
    const { result } = renderHook(() => useFetchGifs("Valorant"));

    await waitFor(() =>
      expect(result.current.dataGifs.length).toBeGreaterThan(0)
    );
    const { isLoading, dataGifs } = result.current;
    expect(dataGifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
    // useFetchGifs();
  });
});
