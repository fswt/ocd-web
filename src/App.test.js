import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders", () => {
  act(() => {
    render(<Hello />, container);
  });
  expect(container.textContent).toBe("");

  act(() => {
    render(<Hello name="Jenny" />, container);
  });
  expect(container.textContent).toBe("");

  act(() => {
    render(<Hello name="Margaret" />, container);
  });
  expect(container.textContent).toBe("");
});
