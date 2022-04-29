import React from 'react';
import { Button } from './styles';
import {PrimaryButtonProps} from './types';

export default function PrimaryButton({background, children}:PrimaryButtonProps) {

  return (
    <>
      <Button background={background}>
        {children}
      </Button>
    </>
  );
}