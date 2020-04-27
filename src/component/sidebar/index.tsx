import React from "react";

import * as S from "./styles";

interface SideBarProps {
  children?: React.ReactNode;
  backgroundColor?: string;
}

const SideBar: React.FC<SideBarProps> = ({ children, backgroundColor }) => {
  return (
    <S.SideBar>
      <S.SideBarContainer backgroundColor={backgroundColor}>
        {children}
      </S.SideBarContainer>
    </S.SideBar>
  );
};

export default SideBar;
