import { render, fireEvent } from "@testing-library/react";
import ClearList from "./";

const TestProps = {
  clearList: jest.fn(),
  buttonText: "Clear List",
};

test("Clear list section renders to the page", () => {
  const { getByText } = render(<ClearList {...TestProps} />);
  const actual = getByText("Clear List");
  expect(actual).toBeInTheDocument();
});

test("Button should display button text from props", () => {
  const { getByTestId } = render(<ClearList {...TestProps} />);
  const actual = getByTestId("clear-btn");
  expect(actual).toHaveTextContent(TestProps.buttonText);
});

test("clearList is fired on Click", () => {
  const { getByTestId } = render(<ClearList {...TestProps} />);
  const button = getByTestId("clear-btn");
  fireEvent.click(button);
  expect(TestProps.clearList).toHaveBeenCalled();
});
