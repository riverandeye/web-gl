import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import Canvas from "../../component/canvas";

const Main = () => {
  return (
    <Layout>
      <S.Main>
        <S.MainContainer>
          <Canvas width={800} height={800} />
        </S.MainContainer>
      </S.Main>
    </Layout>
  );
};

export default Main;
