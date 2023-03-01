import GithubLogo from '../../assets/logo.png'
import GithubName from '../../assets/github.png'
import { LogoContainer } from './style'


export function Logo() {
  return (
    <>
      <LogoContainer>
        <img src={GithubLogo} alt="Github logo" />
      </LogoContainer>
      <img src={GithubName} alt="Github logo" />
    </>

  )
}