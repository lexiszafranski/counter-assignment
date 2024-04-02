// import necessary react testing library helpers here
// import the Counter component here
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const message = screen.getByText("Counter");
  expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count1 = screen.getByTestId("count");
  expect(count1).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const button1 = screen.getByText("+");
  const countDisplay = screen.getByTestId("count");
  fireEvent.click(button1);
  expect(countDisplay).toHaveTextContent("1");
  fireEvent.click(button1);
  expect(countDisplay).toHaveTextContent("2");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const button2 = screen.getByText("-");
  const countDisplay = screen.getByTestId("count");
  fireEvent.click(button2);
  expect(countDisplay).toHaveTextContent("-1");
  fireEvent.click(button2);
  expect(countDisplay).toHaveTextContent("-2");
});