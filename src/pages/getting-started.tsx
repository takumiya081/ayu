/* eslint-disable import/no-default-export */
import {Link} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React, {useState} from 'react';

import {Header} from '@/components/Header';
import {LayoutBox} from '@/components/LayoutBox';
import {Template} from '@/components/Template';

export const GettingStarted: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleMenuButtonClick() {
    setSidebarOpen(true);
  }

  function handleSidebarClose() {
    setSidebarOpen(false);
  }

  return (
    <Template onSidebarClose={handleSidebarClose} sidebarOpen={sidebarOpen}>
      <Header onMenuButtonClick={handleMenuButtonClick} />
      <Container maxWidth="md">
        <LayoutBox my="4">
          <Typography component="h2" variant="h4">
            きときと鮎マップ
          </Typography>
        </LayoutBox>
        <LayoutBox mb="4">
          <Typography component="p" variant="subtitle1">
            鮎釣りのおとり取扱店を地図から探せるオープンソースのサービスです。
          </Typography>
        </LayoutBox>
        <LayoutBox mb="4">
          <LayoutBox mb="2">
            <Typography component="h3" variant="h5">
              なぜやるのか
            </Typography>
          </LayoutBox>
          <Typography component="p" variant="body1">
            大好きな川や鮎釣りを未来に残し自然に恩返しするため
            <span role="img" aria-label="さかな">
              🐟
            </span>
            <br />
            鮎釣り人口が高齢化と減少の影響により、どんどん鮎釣り業界が衰退しています。
            もしこのまま衰退の一途をたどれば、おとり取扱店が地域からなくなる可能性があります。
            おとりがなければ鮎釣りは成立しません😵釣りがなくなるだけなく、もっと最悪なケースが川から
            <strong>鮎がいなくなってしまう</strong>
            ということです。
            <br />
            鮎は川で孵化し海で成長してから夏に川に遡上します。しかしダムや堰堤があるので鮎はそれ以上にのぼれません。漁協はこの鮎をダムの上流に再放流したり、稚魚を放流する取り組みをしてくれています。
            <br />
            鮎釣り人口がもっと減れば漁協のこの取組も継続することが難しくなり、最終的に川から鮎がいなくなってしまう恐れがあります。子どもたちが遊ぶ川に鮎がいないなんて悲惨すぎる😰
            <br />
            釣具メーカーや漁協の方たちはなんとかこれを阻止するため、イベントやキャンペーンを通して新規参入者を増やそうと頑張ってくれています！
            <br />
            しかし、鮎釣りを始めたいと思ってる人にとって大きなハードルがあると考えています。
            <strong>おとりを買うまでのハードルが高すぎる。</strong>
            そもそもおとり取扱店を探すこと自体が難しい。。。
          </Typography>
        </LayoutBox>

        <LayoutBox mb="4">
          <LayoutBox mb="2">
            <Typography component="h3" variant="h5">
              おとり店にもっと簡単に行けるようにする
            </Typography>
          </LayoutBox>
          <Typography component="p" variant="body1">
            全国のおとり取扱店の情報に簡単にアクセスできるようにするぞ！！
          </Typography>
        </LayoutBox>

        <LayoutBox mb="4">
          <LayoutBox mb="2">
            <Typography component="h3" variant="h5">
              開発と貢献方法
            </Typography>
          </LayoutBox>
          <Typography component="p" variant="body1">
            この活動は非営利で運用しています。サポーターしてくれる方募集中です。
          </Typography>
          <Typography component="h5" variant="h6">
            開発について
          </Typography>
          <Typography component="p" variant="body1">
            鮎釣り好きでもそうじゃなくても、開発に貢献してもらえれば嬉しいです。react, typescript,
            next.js, graphqlを使っています。
          </Typography>
          <Typography component="p" variant="body1">
            TODO: 詳細な開発方法の手順を掲載
          </Typography>
          <Typography component="h5" variant="h6">
            データについて
          </Typography>
          <Typography component="p" variant="body1">
            各漁協や河川のサイトから、住所が明記されているものについてのみ順次追加しています。
            <br />
            個人で集めるには限界があり元データが間違っていたり、追加してもいいデータがあれば
            <Link href="https://twitter.com/nayakaya0606">@nayakaya0606</Link>
            までにご連絡ください🙇‍♂️
          </Typography>
        </LayoutBox>

        <LayoutBox mb="4">
          <LayoutBox mb="2">
            <Typography component="h3" variant="h5">
              データの削除の依頼
            </Typography>
          </LayoutBox>
          <Typography>
            このrepositoryにissueをたてるか、
            <Link href="https://twitter.com/nayakaya0606">@nayakaya0606</Link>
            までご連絡ください。
          </Typography>
        </LayoutBox>

        <LayoutBox mb="4">
          <LayoutBox mb="2">
            <Typography component="h3" variant="h5">
              免責事項
            </Typography>
          </LayoutBox>
          <Typography>
            当サイトに掲載されている情報については、当サイトの開発者・関係者は、利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。
            また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。
            当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。
          </Typography>
        </LayoutBox>
      </Container>
    </Template>
  );
};

export default GettingStarted;
