import { render, screen, act } from "@testing-library/react";
import Timer from "./index";

jest.useFakeTimers();

describe("Counter", () => {
  it("renders with initial time and count down", () => {
    const initialTime = 5;
    const timeIsFinishedMock = jest.fn();

    render(<Timer time={initialTime} timeIsFinished={timeIsFinishedMock} />);

    const timeElement = screen.getByText(initialTime.toString());
    expect(timeElement).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(timeElement).toHaveTextContent("3");
    
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    
    expect(timeElement).toHaveTextContent("0");
    expect(timeIsFinishedMock).toHaveBeenCalledTimes(1);
  });
});
