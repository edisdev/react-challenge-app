import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Button from '../components/Button';


test('renders button component with props', () => {
  const { asFragment } = render(<Button id="textButton" className="btn-dark">Hello!</Button>);
  expect(asFragment()).toMatchSnapshot()
});

it('button component click event is correct work', (done) => {
  function handleClick() {
    done();
  }

  const { getByTestId } = render(
    <Button data-testid="test-button" onClick={handleClick}>Click Me!</Button>
  );

  const node = getByTestId("test-button");

  fireEvent.click(node);
})

afterEach(cleanup);