import React from 'react'
import { Control, useWatch } from 'react-hook-form'
import { Form } from './Content'

interface PropTyps {
  control: Control<Form>
}

const BenefitWatched: React.FC<PropTyps> = (props) => {
  const { control } = props
  const level = useWatch({ control, name: 'level' })

  return (
    <p>
      5. {level?.value ?? ''}贊助福利
    </p>
  )
}

export default React.memo(BenefitWatched)