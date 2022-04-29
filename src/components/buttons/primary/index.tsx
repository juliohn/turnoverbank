import React from 'react';
import { Button } from './styles';

export default function PrimaryButton({background, children}) {

  return (
    <>
      <Button background={background}>
        {children}
      </Button>
    </>
  );
}