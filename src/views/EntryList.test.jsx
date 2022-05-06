import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../context/userContext';

import EntryList from './EntryList';

describe('EntryList', () => {
  it('Should render list of characters', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <EntryList />
        </UserProvider>
      </MemoryRouter>
    );
    screen.getByText(/loading/i);
  });
});
