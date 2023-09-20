'use client';
import { useEffect, useState } from 'react';

const getHash = () => (typeof window !== 'undefined' ? decodeURIComponent(window.location.hash.replace('#', '')) : undefined);

const useHash = () => {
  
  const [hash, setHash] = useState(getHash());

  useEffect(() => {
    const onWindowHashChange = () => {
      setHash(getHash());
    };
    window.addEventListener('load', onWindowHashChange)
    window.addEventListener('hashchange', onWindowHashChange);
    return () => {
      window.removeEventListener('hashchange', onWindowHashChange);
      window.removeEventListener('load', onWindowHashChange)
    };
  }, []);

  return hash;
};

export default useHash;