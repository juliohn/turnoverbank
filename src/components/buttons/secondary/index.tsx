import React from 'react';
import { Button } from './styles';

export default function SecondaryButton({background, children}) {

  return (
    <>
      <Button background={background}>
        {children}
      </Button>
    </>
  );
}