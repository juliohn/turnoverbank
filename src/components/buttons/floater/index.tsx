import React from 'react';
import { Button } from './styles';

export default function FloaterButton({background, children}) {
  
  return (
    <>
      <Button background={background}>
        {children}
      </Button>
    </>
  );
}