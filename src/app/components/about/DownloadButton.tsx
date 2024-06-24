"use client";

import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export function DownloadButton({ download }: { download: string; }): React.ReactNode {
  const downloadHandler = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.print()
    return false;
  }, []);
  return <div className="columns download">
    <p>
      <a href={download} className="button" onClick={downloadHandler}>
        <FontAwesomeIcon icon={faDownload} className="button-icon" />
        Download Resume
      </a>
    </p>
  </div>;
}
