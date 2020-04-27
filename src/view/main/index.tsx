import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import Canvas from "../../component/canvas";
import ColorBar from "../../container/color-bar";
import OptionBar from "../../container/option-bar";

const Main = () => {
  return (
    <Layout>
      <S.Main>
        <S.MainContainer>
          <ColorBar />
          <Canvas id={"main"} width={800} height={800} />
          <OptionBar />
        </S.MainContainer>
      </S.Main>
    </Layout>
  );
};

export default Main;
