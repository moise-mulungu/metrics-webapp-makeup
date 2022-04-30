import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header component', () => {
  it('component should render properly', () => {
    const header = render(
      <Header />,
    );
    expect(header).toMatchSnapshot();
  });

  test('renders  country  capital', () => {
    const { container } = render(
      <Header />,
    );

    const siteName = container.querySelector('h1');
    expect(siteName).toHaveTextContent(/Cosmetic Products\/ Makeups/i);
  });
});
