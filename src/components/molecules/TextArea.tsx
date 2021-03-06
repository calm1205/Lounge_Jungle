import React from 'react';
import { theme } from '~/theme';
import {
  Box,
  FormErrorMessage,
  Label,
  StyledTextArea,
} from '~/components/atoms';

export type TextAreaType = {
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onChange?: () => void;
  onBlur?: () => void;
};

export const TextArea: React.FC<TextAreaType> = ({
  name,
  label,
  placeholder,
  value,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <>
      <Label text={label}>
        <StyledTextArea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <Box marginTop={theme.space.xs}>
          <FormErrorMessage>{error}</FormErrorMessage>
        </Box>
      </Label>
    </>
  );
};
