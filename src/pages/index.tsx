/* eslint-disable import/no-default-export */
import {NextPage} from 'next';
import React, {useState} from 'react';

import {Header} from '@/components/Header';
import {LayoutBox} from '@/components/LayoutBox';
import {RiverOption, SearchTextField} from '@/components/SearchTextField';
import {ShopMap} from '@/components/ShopMap';
import {Template} from '@/components/Template';

const TopPage: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [river, setRiver] = useState<RiverOption>();

  function handleSearchRiverChange(selectedRiver: RiverOption) {
    setRiver(selectedRiver);
  }

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
          <SearchTextField placeholder="川の名前で検索" onChange={handleSearchRiverChange} />
        </LayoutBox>
      </Header>
      <ShopMap river={river} />
    </Template>
  );
};

export default TopPage;
