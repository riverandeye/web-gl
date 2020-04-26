import React from "react";
import { Helmet } from "react-helmet";

interface withTitleProps {
  component: React.FC;
  title?: string;
}

const withTitle = ({ component, title }: withTitleProps): React.FC => {
  return () => (
    <>
      <Helmet>
        <title>{title ? title : "Simple WebGL Test app"}</title>
      </Helmet>
      {component}
    </>
  );
};

export default withTitle;
