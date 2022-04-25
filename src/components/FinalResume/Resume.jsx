import React from 'react'
// import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
// import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { useSelector } from 'react-redux';
import { AddressContainer, Container, Contents, Details, LeftContainer, MainContent, NameWrapper, ProfileImageContainer, RightContainer, Wrapper } from './Style';


const Resume = () => {
    
    // console.log(Contact)
    // const address = useSelector(state => state.user.address)   
    // const address = useSelector(state => state.user.address)   
    // console.log(address)

    const name = localStorage.getItem('name')
    localStorage.getItem('address')
    console.log(name)
    
    // const [name , setName] = React.useState(name)

//     Name of course. (required)
// 2. Course completion year. (required)
// 3. College /School Name. (required)
// 4. Percentage. (required)
  return (
    <>
    <Container>
        <Wrapper>
            <LeftContainer>
                <ProfileImageContainer>
                    <img src="https://www.imagediamond.com/blog/wp-content/uploads/2020/05/beautiful-girls-images-30-scaled.jpg" alt="" />
                </ProfileImageContainer>
                    <NameWrapper>
                        <h2> {name} </h2>
                        <h3> Software Engineer </h3>
                    </NameWrapper>
                <AddressContainer>
                    {/* <h3>{address}</h3> */}
                    <Contents> <span> </span> Haladhibari Borpather Khowang </Contents>
                    <Contents> <span> </span> +91 9876543210 </Contents>
                </AddressContainer>        
                <AddressContainer>
                    <h3>Skills</h3>
                    <Contents> <span> </span> Haladhibari Borpather Khowang </Contents>
                    <Contents> <span> </span> +91 9876543210 </Contents>
                </AddressContainer>        
                <AddressContainer>
                    <h3>Social Links</h3>
                    <Contents> <span> </span> Haladhibari Borpather Khowang </Contents>
                    <Contents> <span> </span> +91 9876543210 </Contents>
                </AddressContainer>        
            </LeftContainer>
            <RightContainer>

                <MainContent>
                    <h3>About</h3>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                </MainContent>
                <MainContent>
                    <h3>Education Details</h3>               
                    <Details>
                        Kaziranga University (2016 - 2020)
                        <span> B.tech  </span>
                        <p> Percentage : <span style={{marginLeft:10}}>80 % </span>   </p>
                    </Details>
                    <Details>
                        Moran Higher Secondery School (2014 - 2016)
                        <span> Higher Secondery </span>
                        <p> Percentage : <span style={{marginLeft:10}}>80 % </span>   </p>
                    </Details>
                    <Details>
                        Naharani High School (2010 - 2013)
                        <span> Matericulation  </span>
                        <p> Percentage : <span style={{marginLeft:10}}>80 % </span>   </p>
                    </Details>
                </MainContent>
                <MainContent>
                    <h3>Projects</h3>               
                    <Details>
                        Kaziranga University 
                        <p>Technology Used : <span style={{marginLeft:10}}> React , Node Js , MongoDB, Express</span> </p>
                        <span> </span>
                        <p> Descriptions : </p>
                        <span> 
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis provident facilis et? Velit, alias ratione quasi cumque adipisci soluta quas maxime iste, corrupti nesciunt a totam error facere, obcaecati fuga!
                             </span>
                    </Details>
                    <Details>
                        Kaziranga University 
                        <p>Technology Used : <span style={{marginLeft:10}}> React , Node Js , MongoDB, Express</span> </p>
                        <span> </span>
                        <p> Descriptions : </p>
                        <span> 
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis provident facilis et? Velit, alias ratione quasi cumque adipisci soluta quas maxime iste, corrupti nesciunt a totam error facere, obcaecati fuga!
                             </span>
                    </Details>
                    <Details>
                        Kaziranga University 
                        <p>Technology Used : <span style={{marginLeft:10}}> React , Node Js , MongoDB, Express</span> </p>
                        <span> </span>
                        <p> Descriptions : </p>
                        <span> 
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis provident facilis et? Velit, alias ratione quasi cumque adipisci soluta quas maxime iste, corrupti nesciunt a totam error facere, obcaecati fuga!
                             </span>
                    </Details>
            
                </MainContent>   
            </RightContainer>
        </Wrapper>
    </Container>
    </>
  )
}

export default Resume