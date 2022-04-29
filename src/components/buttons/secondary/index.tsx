import React from 'react';
import { Button } from './styles';
import {SecondaryButtonProps} from './types'
export default function SecondaryButton({background, children}:SecondaryButtonProps) {

  return (
    <>
      <Button background={background}>
        {children}
      </Button>
    </>
  );
}