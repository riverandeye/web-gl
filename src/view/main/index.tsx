import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import Canvas from "../../component/canvas";
import SideBar from "../../component/sidebar";

const Main = () => {
  return (
    <Layout>
      <S.Main>
        <S.MainContainer>
          <SideBar backgroundColor={"#F9F6F7"}></SideBar>
          <Canvas width={800} height={800} />
          <SideBar backgroundColor={"#FFE8D6"}></SideBar>
        </S.MainContainer>
      </S.Main>
    </Layout>
  );
};

export default Main;
