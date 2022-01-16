import { render } from "@testing-library/react";
import ListDisplay from "./";

const TestProps = {
  list: [
    { name: "Oranges", completed: false, id: 0 },
    { name: "Tea", completed: false, id: 1 },
    { name: "Aubergine", completed: false, id: 2 },
    { name: "Biscuits", completed: false, id: 3 },
    { name: "Dishwasher Tablets", completed: false, id: 4 },
  ],
  tickItem: jest.fn(),
};

test("List display renders to the page", () => {
  const { getByTestId } = render(<ListDisplay {...TestProps} />);
  const actual = getByTestId("list-display");
  expect(actual).toBeInTheDocument();
});

test("List contains the correct number of components", () => {
  const { getAllByTestId } = render(<ListDisplay {...TestProps} />);
  const actual = getAllByTestId("list-item");
  expect(actual).toHaveLength(TestProps.list.length);
});
