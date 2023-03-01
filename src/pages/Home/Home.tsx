import { BaseSyntheticEvent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { TextInput } from "../../components/TextInput";
import { HomeContainer, TextContainer } from "./style";

export function Home() {
  const navigate = useNavigate()

  const onSubmitForm = (event: BaseSyntheticEvent) => {
    event.preventDefault()
  }

  return (
    <HomeContainer>
      <Logo />
      <div style={{ marginBottom: '60px' }}>
        <TextContainer>S E A R C H</TextContainer>
      </div>
      <form onSubmit={onSubmitForm}>
        <div style={{ marginBottom: '60px' }}>
          <TextInput label="Enter your username here" type="search"/>
        </div>
        <Button type="submit" label="Search"/>
      </form>
    </HomeContainer>
  )
}