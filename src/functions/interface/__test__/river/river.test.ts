import {btoa} from 'abab';

import {riversData} from '@/functions/modules/river/data/riversData';
import {createApolloTestClient, TestRiverQuery} from '@/functions/testUtils';

jest.mock('@/functions/modules/river/data/riversData');

describe('river query', () => {
  test('riverがある場合', async () => {
    const {query} = createApolloTestClient();
    const result = await query({
      query: TestRiverQuery,
      variables: {id: btoa(riversData[0].id) as string},
    });
    expect(result).toMatchSnapshot();
  });
});
