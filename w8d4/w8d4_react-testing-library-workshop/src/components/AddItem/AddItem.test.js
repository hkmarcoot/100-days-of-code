import { render, fireEvent } from "@testing-library/react";
import AddItem from "./";

const TestProps = {
  addToList: jest.fn(),
  buttonText: "Add To List",
};

test("AddItem section renders to the page", () => {
  const { getByTestId } = render(<AddItem {...TestProps} />);
  const actual = getByTestId("add-item");
  expect(actual).toBeInTheDocument();
});

test("Button should display button text from props", () => {
  const { getByTestId } = render(<AddItem {...TestProps} />);
  const actual = getByTestId("add-item-btn");
  expect(actual).toHaveTextContent(TestProps.buttonText);
});

test("AddToList is fired on Click", () => {
  const { getByTestId } = render(<AddItem {...TestProps} />);
  const button = getByTestId("add-item-btn");
  fireEvent.click(button);
  expect(TestProps.addToList).toHaveBeenCalled();
});
