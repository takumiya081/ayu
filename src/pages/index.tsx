/* eslint-disable import/no-default-export */
import {GetServerSideProps, NextPage} from 'next';
import {useRouter} from 'next/router';
import React, {useState} from 'react';

import {Header} from '@/components/Header';
import {LayoutBox} from '@/components/LayoutBox';
import {RiverOption, SearchTextField} from '@/components/SearchTextField';
import {ShopMap} from '@/components/ShopMap';
import {Template} from '@/components/Template';
import {
  initializeApollo,
  InitialShopsFromRiverDocument,
  InitialShopsFromRiverQuery,
  InitialShopsFromRiverQueryVariables,
  useInitialShopsFromRiverQuery,
} from '@/lib/apollo';

const TopPage: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {replace, query} = useRouter();

  const riverId = typeof query.riverId === 'string' ? query.riverId : '';
  const {data} = useInitialShopsFromRiverQuery({
    variables: {riverId},
  });

  const [river, setRiver] = useState<RiverOption | undefined>((data && data.river) ?? undefined);

  function handleSearchRiverChange(selectedRiver: RiverOption) {
    setRiver(selectedRiver);
    replace({pathname: '/', query: {riverId: selectedRiver.id}}, undefined, {shallow: true});
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

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const riverId = typeof query.riverId === 'string' ? query.riverId : '';
  const apolloClient = initializeApollo();
  await apolloClient.query<InitialShopsFromRiverQuery, InitialShopsFromRiverQueryVariables>({
    variables: {riverId},
    query: InitialShopsFromRiverDocument,
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default TopPage;
