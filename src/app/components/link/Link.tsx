"use client";
import React, { PropsWithChildren } from 'react';
import RouterLink from 'next/link';;
import * as Scroll from 'react-scroll';
import { usePathname, useRouter } from 'next/navigation';

interface LinkProps {
  to: string;
  className?: string;
}

export const Link: React.FC<PropsWithChildren<LinkProps>> = ({ to, children, className }) => {
  const router = useRouter();
  const currentPath = usePathname();

  // Check if the link contains a fragment identifier
  const hasFragment = to.includes('#');
  const fragment = hasFragment ? to.substring(to.indexOf('#') + 1) : null;
  const path = to.substring(0, hasFragment ? to.indexOf('#') : undefined);
  const scroller = Scroll.scroller;
  
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {

    // Prevent the default behavior of anchor tags
    event.preventDefault();
    const resolvedPath = (path.startsWith('/') ? path : `${currentPath}/${path}`)
      .replace(/\/+$/, '/') // handle double slash
      .replace(/(?<=[^\/])\/+$/, ''); // remove trailing slash if its not the only path part
    console.log({resolvedPath, currentPath, fragment})
    if(resolvedPath !== currentPath) {
      router.push(to, {scroll: true}) // snap straight to the right place if on another page
    } else {
      router.replace(to, { scroll: false }) // don't instant scroll, instead use animations and replace curent url
      if (fragment) {
        // Scroll to the element using react-scroll
        scroller.scrollTo(fragment, {
          duration: 500,
          smooth: true,
        });
      } else {
        Scroll.animateScroll.scrollToTop();
      }
    };
  };
  return (
    <a href={to} style={{ cursor: 'pointer' }} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
