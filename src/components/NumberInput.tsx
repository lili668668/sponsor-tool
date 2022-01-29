import React from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import NumberFormat from 'react-number-format'

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat<number> | null) => void;
  onChange: (event: { target: { value: string } }) => void;
}

const NumberFormatCustom: React.FC<NumberFormatCustomProps> = (props) => {
  const { inputRef, onChange, ...rest } = props

  return (
    <NumberFormat
      {...rest}
      getInputRef={inputRef}
      onValueChange={values => onChange({ target: { value: values.value }})}
    />
  )
}

const NumberInput: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      {...props}
      InputProps={{
        ...props.InputProps,
        inputComponent: NumberFormatCustom as any
      }}
    />
  )
}

export default React.memo(NumberInput)
