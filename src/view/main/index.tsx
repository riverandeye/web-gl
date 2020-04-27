import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import Canvas from "../../container/canvas";

const Main = () => {
  return (
    <Layout>
      <S.Main>
        <S.MainContainer>
          <Canvas id={"main"} width={800} height={800} />
        </S.MainContainer>
      </S.Main>
    </Layout>
  );
};

export default Main;
