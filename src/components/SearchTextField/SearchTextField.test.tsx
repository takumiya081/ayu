import {MockedProvider, MockedProviderProps} from '@apollo/react-testing';
import React from 'react';

import {
  SearchRiverDocument,
  SearchRiverQueryHookResult,
  SearchRiverQueryVariables,
} from '@/lib/apollo';
import {fireEvent, render} from '@/testLib';

import {SearchTextField} from './SearchTextField';

const withWrapper = (apolloMocks: MockedProviderProps['mocks']): React.ComponentType => {
  const Wrapper: React.FC = ({children}) => {
    return (
      <MockedProvider mocks={apolloMocks} addTypename>
        <>{children}</>
      </MockedProvider>
    );
  };
  return Wrapper;
};

describe('SearchTextField', () => {
  test('入力して選択すると、コールバックが呼ばれる', async () => {
    const mockResult: Pick<SearchRiverQueryHookResult, 'data'> = {
      data: {
        __typename: 'Query',
        searchRiver: [
          {
            __typename: 'River',
            id: 'result-id-1',
            name: 'テスト川1',
            location: {
              __typename: 'Location',
              lat: 1.1,
              lng: 1.2,
            },
          },
          {
            __typename: 'River',
            id: 'result-id-2',
            name: 'テスト川2',
            location: {
              __typename: 'Location',
              lat: 2.1,
              lng: 2.2,
            },
          },
        ],
      },
    };

    const mockVariables: SearchRiverQueryVariables = {
      query: 'テスト川',
    };

    const mockCallback = jest.fn();
    const {getByLabelText, findByText} = render(<SearchTextField onChange={mockCallback} />, {
      wrapper: withWrapper([
        {request: {query: SearchRiverDocument, variables: mockVariables}, result: mockResult},
      ]),
    });
    const input = getByLabelText('検索');
    fireEvent.change(input, {target: {value: 'テスト川'}});
    const optionElement = await findByText('テスト川1');
    fireEvent.click(optionElement);
    expect(mockCallback).toBeCalledTimes(1);
    expect(mockCallback.mock.calls[0][0]).toStrictEqual(mockResult.data?.searchRiver[0]);
  });
});
