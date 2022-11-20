import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import catalogAllProductStore from '../stores/CatalogAllProductStore';

const App = () => {

    const {loadAllProducts} = catalogAllProductStore

    useEffect(()=>{
        loadAllProducts()
    },[])

  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    console.log(page);
    loadAllProducts(page)
    setCurrent(page);
  };
  return <Pagination current={current} onChange={onChange} total={120} />;
};
export default App;