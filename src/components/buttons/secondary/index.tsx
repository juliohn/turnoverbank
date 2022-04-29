import React from 'react';
import { Button } from './styles';

export default function SecondaryButton({border, children}) {

  return (
    <>
      <Button border={border}>
        {children}
      </Button>
    </>
  );
}