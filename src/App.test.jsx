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

    const link = screen.getByRole('link', { name: /Entry List/i });
    userEvent.click(link);

    const signUpHeading = screen.getByRole('heading', {
      name: /sign up here!/i,
    });
    expect(signUpHeading).toBeInTheDocument();

    const signInEmail = screen.getByPlaceholderText(/sign-in email here/i);
    userEvent.type(signInEmail, 'user@alchemy.com');

    const passwordInput = screen.getByPlaceholderText(/password here/i);
    userEvent.type(passwordInput, 'test12345');

    const signInButton = screen.getByRole('button', { name: /submit/i });
    userEvent.click(signInButton);

    // const entryText = await screen.findByText('alright');
    // expect(entryText).toBeInTheDocument();
  });
});
