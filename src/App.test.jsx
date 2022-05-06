import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import App from './App';

describe('App', () => {
  it('Should render the list of entries', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const heading = await screen.findByText('Welcome to the Guestbook!');
    expect(heading).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /Entry List/i });
    expect(heading).toBeInTheDocument();
  });
});
