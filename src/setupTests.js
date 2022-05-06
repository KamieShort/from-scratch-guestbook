// import fetch from 'cross-fetch';
// global.fetch = fetch;

import fetch from 'cross-fetch';
import { setupServer } from 'msw/node';

global.fetch = fetch;

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
