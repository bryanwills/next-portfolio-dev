'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import { cn } from 'lib/utils';

const Header = () => {
  const [sidebar, toggle] = useState(false);

  return (
    <div className="w-full bg-transparent">
      <div
        className={cn('bg-black/70 w-full h-full transition-all duration-300 ease-in-out', {
          'block z-10': sidebar,
          hidden: !sidebar,
        })}
        onClick={() => toggle(!sidebar)}
      />
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={() => toggle(!sidebar)} />
    </div>
  );
};

export default Header;
