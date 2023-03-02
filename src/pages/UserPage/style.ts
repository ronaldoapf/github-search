import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  height: 100vh;

  @media screen and (max-width: 374px) {
    max-width: 288px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    max-width: 337px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 720px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    max-width: 960px;
  }

  @media screen and (min-width: 1366px) and (max-width: 1919px) {
    max-width: 1140px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 1320px;
  }
`

export const HeaderPage = styled.header`
  margin-top: 42px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px){
    margin-top: 30px;
  }
`

export const Avatar = styled.img`
  width: 146px;
  height: 146px;
  border-radius: 50%;
`

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: var(--purple);
  line-height: 28.13px;
`

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  color: var(--gray);
`

export const ItemUser = styled.div`
  gap: 5px;
  display: flex;
  color: var(--gray);
  align-items: center;

  svg {
    fill: var(--purple);
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContentUser = styled.div`
  gap: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 40px;
    text-align: start;
    flex-direction: row;
  }
`
export const CountRepos = styled.div`
  height: 79px;
  width: 168px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dark-color);

  div {
    margin-top: 10px;
  }

  div p {
    font-size: 24px;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    background-color: var(--purple);
  }
`

export const PrincipalInfo = styled.div`
  margin-bottom: 20px;
`

export const SecondaryInfo = styled.div`
  gap: 20px;
  display: flex; 
`

export const ThirdInfo = styled.div`
  gap: 10px;
  display: flex;
  text-align: center;
  justify-content: center;

  @media screen and (min-width: 768px){
    justify-content: start;
  }
`

export const CardRepo = styled.div`
  gap: 20px;
  width: 282px;
  display: flex;
  height: 180px;
  padding: 10px 15px;
  border-radius: 5px;
  flex-direction: column;
  background: var(--dark-color);
`

export const ReposContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  align-items: center;
  padding-bottom: 40px;
  justify-content: center;
  a {
    text-decoration: none;
  }
`
export const TitleRepo = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: var(--gray);
` 

export const RepoDescription = styled.p`
  width: 211px;
  height: 70px;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  line-height: 16px;
  color: var(--gray);
  white-space: break-spaces;
`

export const Language = styled.div`
  gap: 10px;
  display: flex;
  font-size: 14px;
  color: var(--gray);
  align-items: center;
  svg {
    fill: var(--purple);
  }
`