import {riversData} from '@/functions/modules/river/data/riversData';
import {createApolloTestClient, TestSearchRiverQuery} from '@/functions/testUtils';

jest.mock('@/functions/modules/river/data/riversData');

describe('search river query', () => {
  test('riverがある場合', async () => {
    const {query} = createApolloTestClient();
    const result = await query({
      query: TestSearchRiverQuery,
      variables: {query: riversData[1].name},
    });
    expect(result).toMatchSnapshot();
  });
});
