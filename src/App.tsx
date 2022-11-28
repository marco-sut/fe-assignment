import React, { Ref } from 'react';
import './App.css';
import { Button } from './button/Button';
import { ReactComponent as UmbrellaSvg } from './button/umbrella.svg';

function App() {
  const ref: Ref<HTMLButtonElement> = React.createRef();

  const handleClick = () => {
    alert(ref.current?.value);
  }

  return (
    <div className="App">
      <Button>Default</Button>

      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary <UmbrellaSvg /></Button>

      <Button variant='primary' disabled>Primary disabled <UmbrellaSvg /></Button>
      <Button variant='secondary' disabled>Secondary disabled <UmbrellaSvg /></Button>

      <Button ref={ref}
        variant='primary'
        name='primary'
        value='My button awesome value'
        type='submit'
        onClick={handleClick}>Primary Button / reading ref <UmbrellaSvg /></Button>

      <Button variant='primary' className="my-fancy-button__primary"><UmbrellaSvg /> My fancy primary <UmbrellaSvg /></Button>
      <Button variant='secondary' className="my-fancy-button__secondary"><UmbrellaSvg /> My fancy secondary <UmbrellaSvg /></Button>
    </div>
  );
}

export default App;
