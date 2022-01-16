import { render, fireEvent } from "@testing-library/react";
import ListItem from "./";

const TestProps = {
  name: "A Random Name",
  completed: false,
  tickItem: jest.fn(),
};

test("List display renders to the page", () => {
  const { getByTestId } = render(<ListItem {...TestProps} />);
  const actual = getByTestId("list-item");
  expect(actual).toBeInTheDocument();
});

test("Inner text of the list item should be the value of the name prop", () => {
  const { getByTestId } = render(<ListItem {...TestProps} />);
  const actual = getByTestId("list-item");
  expect(actual).toHaveTextContent(TestProps.name);
});

test("List item has class of tickedItem if completed = false or untickedItem if completed = true", () => {
  const { getByTestId } = render(<ListItem {...TestProps} />);
  const actual = getByTestId("list-item");
  if (TestProps.completed) {
    expect(actual).toHaveClass("tickedItem");
  } else expect(actual).toHaveClass("untickedItem");
});

test("tickItem is fired on Click", () => {
  const { getByTestId } = render(<ListItem {...TestProps} />);
  const button = getByTestId("list-item");
  fireEvent.click(button);
  expect(TestProps.tickItem).toHaveBeenCalled();
});
