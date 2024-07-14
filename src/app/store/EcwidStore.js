// components/EcwidStore.js
'use client'
import React, { useEffect } from 'react';

const EcwidStore = ({ storeId, categoryId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://app.ecwid.com/script.js?${storeId}`;
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    script.onload = () => {
      window.xProductBrowser(
        "categoriesPerRow=3",
        "views=grid(20,3) list(60) table(60)",
        "categoryView=grid",
        "searchView=list",
        `defaultCategoryId=${categoryId}`,
        `id=my-store-${storeId}`
      );
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [storeId, categoryId]);

  return <div id={`my-store-${storeId}`} />;
};

export default EcwidStore;
