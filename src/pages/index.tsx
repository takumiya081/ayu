/* eslint-disable import/no-default-export */
import {NextPage} from 'next';
import React, {useState} from 'react';

import {Header} from '@/components/Header';
import {LayoutBox} from '@/components/LayoutBox';
import {Map} from '@/components/Map';
import {SearchTextField} from '@/components/SearchTextField';
import {Template} from '@/components/Template';

const TopPage: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleMenuButtonClick() {
    setSidebarOpen(true);
  }

  function handleSidebarClose() {
    setSidebarOpen(false);
  }

  return (
    <Template onSidebarClose={handleSidebarClose} sidebarOpen={sidebarOpen}>
      <Header onMenuButtonClick={handleMenuButtonClick}>
        <LayoutBox display="flex" pr="3" flex={['1 1 auto', '1 1 auto', '0 0 auto']}>
          <SearchTextField placeholder="川の名前で検索" />
        </LayoutBox>
      </Header>
      <Map />
    </Template>
  );
};

export default TopPage;
