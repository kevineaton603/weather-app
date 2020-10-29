import React from "react";
import "./layout.css";

const Layout: React.FunctionComponent<{
  header?: React.ReactNode;
  footer?: React.ReactNode;
}> = ({ header, children, footer }) => {
  return (
    <div className="container">
      <header>{header ? header : null}</header>
      <main>{children}</main>
      <footer>{footer ? footer : null}</footer>
    </div>
  );
};

export default Layout;
