import React from "react";
import { Helmet } from "react-helmet";

interface withTitleProps {
  Component: React.FC;
  title?: string;
}

const withTitle = ({ Component, title }: withTitleProps): React.FC => {
  return () => (
    <>
      <Helmet>
        <title>{title ? title : "Simple WebGL Test app"}</title>
      </Helmet>
      <Component />
    </>
  );
};

export default withTitle;
