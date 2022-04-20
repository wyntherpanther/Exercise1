import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import {waitFor} from '@testing-library/react'
import {setupServer} from 'msw/node'
import { handlers } from '../mocks/handlers';

const server = setupServer(
  handlers()
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders Components', () => {
  render(<App />);
  const Header = screen.getByText(/GIfsss/i);
  const search = screen.getByText(/Submit/i);
  const Input = screen.getByTestId("buttonSubmit")
  expect(Header).toBeInTheDocument();
  expect(search).toBeInTheDocument();
  expect(Input).toBeInTheDocument();
});

test('renders Input', async () => {

  server.use(
    handlers()
  )
  render(<App />);
  const Input = screen.getByRole('textbox');
  const search = screen.getByText(/Submit/i);
  const Card = screen.getByTestId('title')
  await userEvent.type(Input, "sonic")
  await userEvent.click(search)
  

  await waitFor(() => expect(Card).toBeInTheDocument());

});
