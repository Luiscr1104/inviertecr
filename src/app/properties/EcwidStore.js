// components/EcwidStore.js
'use client'
import React, { useEffect } from 'react';

const EcwidStore = ({ storeId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://app.ecwid.com/script.js?${storeId}`;
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    script.onload = () => {
      window.xProductBrowser(`id=my-store-${storeId}`);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [storeId]);

  return <div id={`my-store-${storeId}`} />;
};

export default EcwidStore;