import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

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

    const signUpHeading = screen.getByRole('heading', {
      name: /sign up here!/i,
    });
    expect(signUpHeading).toBeInTheDocument();

    const signInEmail = screen.getByPlaceholderText(/sign-in email here/i);
    userEvent.type(signInEmail, 'user@alchemy.com');

    const passwordInput = screen.getByPlaceholderText(/old password here/i);
    userEvent.type(passwordInput, 'test12345');

    const signInButton = screen.getByRole('button', { name: /submit/i });
    userEvent.click(signInButton);

    const entryHeading = await screen.findByRole('heading', {
      name: /Entry List/i,
    });
    expect(entryHeading).toBeInTheDocument();

    const input = screen.getByPlaceholderText('new entry');
    expect(input).toBeInTheDocument();

    const newEntry = screen.findByText('alright');
    userEvent.type(newEntry, 'alright');
  });
});
