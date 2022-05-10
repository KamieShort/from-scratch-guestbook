import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { mswData, mswDataEntries } from './tests/mswData';

import App from './App';
import userEvent from '@testing-library/user-event';
import { UserProvider } from './context/userContext';

// const server = setupServer(
//   rest.post(
//     'https://ezwbsacoojmonmiqffad.supabase.co/auth/v1/token',
//     (req, res, ctx) => res(ctx.json(mswData))
//   ),

//   rest.get(
//     'https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries',
//     (req, res, ctx) => res(ctx.json([mswDataEntries]))
//   ),

//   rest.post(
//     'https://ezwbsacoojmonmiqffad.supabase.co/auth/v1/signup',
//     (req, res, ctx) => res(ctx.json(mswData))
//   )
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

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

    screen.getByPlaceholderText('new entry');

    // const entryText = await screen.findByText('alright');
    // expect(entryText).toBeInTheDocument();
  });
});
