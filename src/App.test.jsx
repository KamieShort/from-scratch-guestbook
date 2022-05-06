import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import App from './App';
import userEvent from '@testing-library/user-event';
import { UserProvider } from './context/userContext';

describe('App', () => {
  it('Should render the list of entries', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
    );

    const heading = await screen.findByText('Welcome to the Guestbook!');
    expect(heading).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /Entry List/i });
    userEvent.click(link);

    const signUpHeading = screen.getByRole('heading', {
      name: /sign up here!/i,
    });
    expect(signUpHeading).toBeInTheDocument();

    const signInEmail = screen.findByPlaceholderText('email here');
    userEvent.type(signInEmail, 'user@alchemy.com');

    // const signInButton = screen.getByRole('button', { name: /go /i });
    // userEvent.click(signInButton);
  });
});
