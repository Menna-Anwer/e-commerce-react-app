import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import brandReducer from './brandReducer';
import subCategoryReducer from './subCategoryReducer';

const cases = [
  ['products', productReducer, 'allProducts'],
  ['categories', categoryReducer, 'allCategories'],
  ['brands', brandReducer, 'brand'],
  ['subcategories', subCategoryReducer, 'subCategory'],
];

test.each(cases)('%s preserves collections and ends loading after a network error', (_, reducer, key) => {
  const existing = [{ _id: 'demo' }];
  const before = { ...reducer(undefined, {}), [key]: existing, loading: true };
  const after = reducer(before, { type: 'Get-Error', payload: new Error('Network unavailable') });
  expect(after[key]).toBe(existing);
  expect(after.loading).toBe(false);
  expect(after.error).toBe('Network unavailable');
});

test('a successful product read clears the prior error', () => {
  const payload = { data: [{ _id: 'demo', title: 'Sample' }] };
  const after = productReducer({ loading: false, error: 'Network unavailable' }, { type: 'Get-All-Products', payload });
  expect(after.allProducts).toBe(payload);
  expect(after.error).toBeNull();
});
