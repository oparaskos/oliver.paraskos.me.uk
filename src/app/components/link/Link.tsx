"use client";
import Link from "next/link";
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface LinkProps {
  to: string;
  className?: string;
}

const getHash = () => (typeof window !== 'undefined' ? decodeURIComponent(window.location.hash.replace('#', '')) : undefined);

function determineClasses(hash: string | null, className: string | undefined, resolvedPath: string, currentPath: string, currentHash: string | undefined) {
  const h = (hash ?? '').replace('#', '');
  const c = [className];
  if (resolvedPath === currentPath && h === currentHash) {
    c.push('active');
  }
  if (resolvedPath === currentPath) {
    c.push('path-match');
  }
  if (h === currentHash) {
    c.push('hash-match');
  }
  return c;
}

function parseHref(to: string, currentPath: string) {
  const hasFragment = to.includes('#');
  const hash = hasFragment ? to.substring(to.indexOf('#')) : null;
  const fragment = hash?.substring(1);
  const path = to.substring(0, hasFragment ? to.indexOf('#') : undefined);

  const resolvedPath = (path.startsWith('/') ? path : `${currentPath}/${path}`)
    .replace(/\/+$/, '/') // handle double slash
    .replace(/(?<=[^\/])\/+$/, ''); // remove trailing slash if it's not the only path part
  return { resolvedPath, hash, fragment };
}

const HashActiveLink: React.FC<PropsWithChildren<LinkProps>> = ({ to, children, className }) => {
  const currentPath = usePathname();
  const [classes, setClasses] = useState([className]);

  useEffect(() => {
    const callback = () => {
      const { resolvedPath, hash } = parseHref(to, currentPath);
      const currentHash = getHash();
      setClasses(determineClasses(hash, className, resolvedPath, currentPath, currentHash));
    }
    const id = setInterval(callback, 100);
    return () => clearInterval(id);
  }, [setClasses, currentPath, to, className]);

  return (
    <Link href={to} className={classes.join(' ')}>
      {children}
    </Link>
  );
};

export default HashActiveLink;
