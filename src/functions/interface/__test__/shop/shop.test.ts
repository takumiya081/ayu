import {shopsData} from '@/functions/modules/shop/data/shopsData';
import {createApolloTestClient, TestShopQuery} from '@/functions/testUtils';

jest.mock('@/functions/modules/shop/data/shopsData');

describe('shop query', () => {
  test('shopがある場合', async () => {
    const {query} = createApolloTestClient();
    const result = await query({
      query: TestShopQuery,
      variables: {id: shopsData[0].id},
    });
    expect(result).toMatchSnapshot();
  });
});
