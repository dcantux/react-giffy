import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renders whotout crashing', async()=> {
  const { findByText } = render(<App />);
  const title = await findByText(/Ultima busqueda/i);
  expect(title).toBeInTheDocument();
})
