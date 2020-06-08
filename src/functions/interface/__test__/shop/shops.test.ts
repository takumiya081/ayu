import {riversData} from '@/functions/modules/river/data/riversData';
import {
  createApolloTestClient,
  TestShopsByLocationQuery,
  TestShopsByRiverIdQuery,
} from '@/functions/testUtils';

jest.mock('@/functions/modules/shop/data/shopsData');
jest.mock('@/functions/modules/union/data/unionsData');
jest.mock('@/functions/modules/river/data/riversData');

describe('shops query', () => {
  test('riverIdでクエリ', async () => {
    const {query} = createApolloTestClient();
    const result = await query({
      query: TestShopsByRiverIdQuery,
      variables: {riverId: riversData[1].id},
    });
    expect(result).toMatchSnapshot();
  });

  test('locationでクエリ', async () => {
    const {query} = createApolloTestClient();
    const result = await query({
      query: TestShopsByLocationQuery,
      variables: {location: {lat: 35, lng: 137}},
    });
    expect(result).toMatchSnapshot();
  });
});
