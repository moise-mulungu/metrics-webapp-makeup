import { render } from '@testing-library/react';
import Input from '../../components/Input';

it('component should render properly', () => {
  const input = render(
    <Input type="checkbox" name="input" className="checkbox" />,
  );
  expect(input).toMatchSnapshot();
});

test('renders  country  capital', () => {
  const { container } = render(
    <Input type="search" name="search" className="search" />,
  );

  const checkBox = container.querySelector('input');
  expect(checkBox.className).toBe('search');
});

test('renders  country  capital', () => {
  const { container } = render(
    <Input type="search" name="search" className="search" />,
  );

  const checkBox = container.querySelector('input');
  expect(checkBox.name).toBe('search');
});
