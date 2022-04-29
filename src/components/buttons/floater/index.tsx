import React from 'react';
import { Button } from './styles';
import {FloaterButtonProps }from './types'

export default function FloaterButton({background, children}:FloaterButtonProps) {
  
  return (
    <>
      <Button background={background}>
        {children}
      </Button>
    </>
  );
}