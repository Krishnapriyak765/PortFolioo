import { Button } from '@mui/material';
import React, { useState } from 'react';

const DownloadCV = () => {
    debugger;
  const [isDownloading, setIsDownloading] = useState(false);
  const fileUrl = 'https://drive.google.com/uc?export=download&id=1P3tZYBxOjt9lORTRuBY2IzxkYU_j8W_d';
  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000); // Simulates download time
  };

  return (
    <div>
      <a href={fileUrl} download="MyCV.pdf" onClick={handleDownload}>
        <Button variant='outlined' disabled={isDownloading}>
          {isDownloading ? 'Downloading...' : 'Download CV'}
        </Button>
      </a>
    </div>
  );
};

export default DownloadCV;