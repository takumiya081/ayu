import React from 'react';

import {act, fireEvent, render, waitForElementToBeRemoved} from '@/testLib';

import {ShopMarker} from './ShopMarker';

describe('ShopMarker', () => {
  test('popperの表示非表示ができる', async () => {
    const mockCallback = jest.fn();
    const {rerender, queryByText, getByLabelText} = render(
      <ShopMarker
        selected={false}
        name="test name"
        id="test-id"
        address="test address"
        onClick={mockCallback}
        lat={1234}
        lng={1234}
      />,
    );
    expect(queryByText('test name')).toBeNull();
    await act(async () => {
      fireEvent.click(getByLabelText('shop icon button'));
      rerender(
        <ShopMarker
          selected
          name="test name"
          id="test-id"
          address="test address"
          onClick={mockCallback}
          lat={1234}
          lng={1234}
        />,
      );
    });
    expect(queryByText('test name')).not.toBeNull();
    await act(async () => {
      rerender(
        <ShopMarker
          selected={false}
          name="test name"
          id="test-id"
          address="test address"
          onClick={mockCallback}
          lat={1234}
          lng={1234}
        />,
      );
    });
    await waitForElementToBeRemoved(queryByText('test name'));
    expect(queryByText('test name')).toBeNull();
  });
});
