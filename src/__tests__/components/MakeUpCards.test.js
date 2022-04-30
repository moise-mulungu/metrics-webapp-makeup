import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MakeUpCards from '../../components/MakeUpCards';
import store from '../../redux/configureStore';

describe('MakeUpCards component', () => {
  it('component should render properly', () => {
    const make = render(
      <Provider store={store}>
        <MakeUpCards />
      </Provider>,
    );
    expect(make).toMatchSnapshot();
  });

  test('renders  country  capital', () => {
    const { container } = render(
      <Provider store={store}>
        <MakeUpCards />
      </Provider>,
    );

    const siteMake = container.querySelector('h2');
    expect(siteMake).toHaveTextContent(/Your foundations/i);
  });
});
