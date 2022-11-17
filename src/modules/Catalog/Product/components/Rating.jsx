import { Rate } from 'antd';
import React from 'react';

const App = ({reviews}) => <Rate allowHalf defaultValue={reviews.rating/10} />;
export default App;