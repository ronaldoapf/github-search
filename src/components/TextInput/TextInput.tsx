import { BaseSyntheticEvent, useState } from "react";
import { TextInputContainer } from "./style";

export interface TextInputProps {
  type: string
  value: string
  label: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export function TextInput({ value, setValue, label, type }: TextInputProps) {

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