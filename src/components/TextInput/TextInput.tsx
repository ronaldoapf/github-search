import { BaseSyntheticEvent, useState } from "react";
import { TextInputContainer } from "./style";

export interface TextInputProps {
  type: string
  label: string
}

export function TextInput({ label, type }: TextInputProps) {
  const [value, setValue] = useState('')

  const onChangeValue = (event: BaseSyntheticEvent) => {
    const { value } = event.target
    setValue(value)
  }

  return (
    <TextInputContainer>
      <input value={value} type={type} onChange={onChangeValue} placeholder={label}/>
    </TextInputContainer>
  )
}