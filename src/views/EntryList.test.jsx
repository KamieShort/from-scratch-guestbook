import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import EntryList from './EntryList';

describe('EntryList', () => {
  it('Should render list of characters', async () => {
    render(
      <MemoryRouter>
        <EntryList />
      </MemoryRouter>
    );
    screen.getByText(/loading/i);
  });
});
