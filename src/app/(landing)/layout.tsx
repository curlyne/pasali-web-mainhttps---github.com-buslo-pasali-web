//export default function LandingLayout({ children }: React.PropsWithChildren) {
//return <div>Landing {children}</div>;

import React from 'react';
import Header from './Header';
import Features from './Features';
import Pricing from './Pricing';
import Footer from './Footer';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="layout">
      <Header />
      <Features />
      <Pricing />
      <Footer />
      {children}
    </div>
  );
};

export default Layout;