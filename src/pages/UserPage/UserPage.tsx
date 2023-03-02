import { useCallback, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import FullLogo from '../../assets/FullLogo.svg'
import { UserApi } from "../../common/resources/api/users"
import { AiOutlineArrowLeft, AiOutlineBranches, AiOutlineCode } from 'react-icons/ai'
import { MdLocationPin, MdBusiness } from 'react-icons/md'
import { BsPeople, BsPeopleFill } from 'react-icons/bs'
import { 
  Text, 
  Avatar, 
  CardRepo, 
  UserInfo, 
  ItemUser, 
  UserName, 
  Language, 
  Container, 
  TitleRepo, 
  ThirdInfo, 
  HeaderPage, 
  CountRepos, 
  ContentUser, 
  PrincipalInfo, 
  SecondaryInfo, 
  ReposContainer, 
  RepoDescription, 
} from "./style"
import { ReposResponse, UserResponse } from "../../common/resources/api/users/types"
import { HashLoader } from 'react-spinners'

export function UserPage() {
  const { username } = useParams()

  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState<ReposResponse[] | null>(null);
  const [dataUser, setDataUser] = useState<UserResponse | null>(null);

  const fetchUser = useCallback(async () => {
    try {
      const userResponse = await UserApi.getUser(username as string)
      const repoResponse = await UserApi.getRepos(username as string)
      setDataUser(userResponse)
      setRepos(repoResponse)
    } catch(e) {
      console.log(e)
    } finally{ 
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUser()
  }, [username])

  if(loading) {
    return (
      <HashLoader
        size={100}
        color="#8752CC"
        loading={loading} 
        cssOverride={{
          width: '100%',
          height: '100vh',
          display: "flex",
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    ) 
  }

  return (
    <Container>
      <HeaderPage>
        <Link to="/">
          <img src={FullLogo} alt="Complete logo of GitHub Search"/>
        </Link>
      </HeaderPage>

      <ContentUser>
        <Avatar src={dataUser?.avatar_url} />
        <UserInfo>
          <PrincipalInfo>
            <UserName>{dataUser?.name}</UserName>
            <Text>@{dataUser?.login}</Text>
          </PrincipalInfo>

          <SecondaryInfo>
            <ItemUser style={{display: 'flex', alignItems: 'center'}}>
              <MdLocationPin />
              <p>{dataUser?.location}</p>
            </ItemUser>
            
            <ItemUser>
              <MdBusiness/>
              <p>{dataUser?.company}</p>
            </ItemUser>
          </SecondaryInfo>

          <ThirdInfo>
            <ItemUser>
              <BsPeopleFill />
              <p>{dataUser?.followers}</p>
            </ItemUser>

            <ItemUser>
              <BsPeople />
              <p>{dataUser?.following}</p>
            </ItemUser>
          </ThirdInfo>
        </UserInfo>
        <CountRepos>
          <Text>Total Repositories</Text>
          <div style={{display: 'flex'}}>
            <AiOutlineBranches />
            <Text>{repos?.length}</Text>
          </div>
        </CountRepos>
      </ContentUser>
    
      <ReposContainer>
        {repos?.map((repo, index) => {
          return (
            <a href={repo?.html_url} target="_blank" key={index}>
              <CardRepo>
                <TitleRepo>{repo?.name}</TitleRepo>

                <RepoDescription title={repo?.description}>{repo?.description ? repo?.description : 'Sem descrição'}</RepoDescription>
                {repo?.language && (
                  <Language>
                    <AiOutlineCode /> <p>{repo?.language}</p>
                  </Language>
                )}
              </CardRepo>
            </a>
          )
        })}
      </ReposContainer>

    </Container>
  )
}