import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ApiStatus from './ApiStatus';

test('shows an actionable warning for an unavailable backend', () => {
  const store = createStore(() => ({ products: { error: 'Network unavailable' } }));
  render(<Provider store={store}><ApiStatus /></Provider>);
  expect(screen.getByRole('alert')).toHaveTextContent('الخادم');
});

test('does not show a warning when requests have no error', () => {
  const store = createStore(() => ({ products: { error: null } }));
  render(<Provider store={store}><ApiStatus /></Provider>);
  expect(screen.queryByRole('alert')).toBeNull();
});
