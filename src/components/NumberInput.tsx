import React from 'react'
import { createStyles, makeStyles } from '@mui/styles'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import NumberFormat from 'react-number-format'

const useStyles = makeStyles(() => createStyles({
  label: {
    zIndex: 0
  }
}))

interface NumberFormatCustomProps {
  onChange: (event: { target: { value: string } }) => void;
}

const NumberFormatCustom: React.FC<NumberFormatCustomProps> = React.forwardRef((props, ref) => {
  const { onChange, ...rest } = props

  return (
    <NumberFormat
      {...rest}
      getInputRef={ref}
      onValueChange={values => onChange({ target: { value: values.value }})}
    />
  )
})

const NumberInput: React.FC<TextFieldProps> = React.forwardRef((props, ref) => {
  const classes = useStyles()
  return (
    <TextField
      ref={ref}
      {...props}
      InputProps={{
        ...props.InputProps,
        inputComponent: NumberFormatCustom as any
      }}
      InputLabelProps={{ classes: { root: classes.label } }}
    />
  )
})

export default React.memo(NumberInput)
