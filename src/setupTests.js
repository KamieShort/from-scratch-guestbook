// import fetch from 'cross-fetch';
// global.fetch = fetch;

import fetch from 'cross-fetch';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { mswData, mswDataEntries } from './tests/mswData';

global.fetch = fetch;

const server = setupServer(
  rest.post(
    'https://ezwbsacoojmonmiqffad.supabase.co/auth/v1/token',
    (req, res, ctx) => res(ctx.json(mswData))
  ),

  rest.get(
    'https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries',
    (req, res, ctx) => res(ctx.json([mswDataEntries]))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
