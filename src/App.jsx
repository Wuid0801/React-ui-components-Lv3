import React from 'react';
import Modal from './components/modal';
import Button from './components/button';
import Input from './components/input';
import BoxSelect from './components/select';


function App() {

  // Select 컴포넌트의 옵션들
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'banana', label: 'Banana' },
    { value: 'mint', label: 'Mint' },
  ];
  return (
    <>
      <Button />
      <Input />
      <BoxSelect options={options} />
      <Modal />
    </>
  );
}

export default App;
