import { CustomButton } from "./style"
import { AiOutlineSearch } from 'react-icons/ai'

export interface ButtonProps {
  label: string
  onClick?: () => void
  type: "button" | "submit" | "reset" | undefined
}

export function Button({ label, type, onClick }: ButtonProps) {
  return (
    <CustomButton type={type} onClick={onClick}>
      {label}
      <AiOutlineSearch />
    </CustomButton>
  )
}