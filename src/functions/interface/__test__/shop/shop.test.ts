import {shopsData} from '@/functions/modules/shop/data/shopsData';
import {createApolloTestClient, TestShopQuery} from '@/functions/testUtils';
import {btoa} from '@/lib/base64';

jest.mock('@/functions/modules/shop/data/shopsData');

describe('shop query', () => {
  test('shopがある場合', async () => {
    const {query} = createApolloTestClient();
    const result = await query({
      query: TestShopQuery,
      variables: {id: btoa(shopsData[0].id) as string},
    });
    expect(result).toMatchSnapshot();
  });
});
