import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    /* border: 1px solid red; */
    position: relative;

  button{
    @media print {
 
 display: none;

}
  }
`
export const Wrapper = styled.div`
    /* border: 1px solid; */
    margin: 20px 180px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 600px) {
        margin: 10px 50px;
    }
    @media print {
 
        margin: 0;

        }
`
export const LeftContainer = styled.div`
    /* position: sticky; */
    /* top: 0; */
    width: 30%;
    /* border: 1px solid yellow; */
    padding: 5px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`

export const ProfileImageContainer = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 999px;
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`
export const NameWrapper = styled.div`
    margin: 20px 0;

    h3{
        font-weight: 500;
        color:#696662 ;
        margin: 10px 0;
    }
`
export const AddressContainer = styled.div`
    width: 100%;
    padding: 5px;
    
`
export const Contents = styled.div`
    display: flex;
    padding: 10px;

    span{
        margin-right: 10px;
    }

`
export const RightContainer = styled.div`
    width: 70%;
    /* border: 1px solid blue; */
    padding: 20px;
    
    @media screen and (max-width: 600px) {
        width: 100%;
    }
    

`
export const MainContent = styled.div`
    width: 100%;
    padding: 20px;
`
export const Details = styled.div`
    display: flex;
    color: #9790fd;
    font-size: 1rem;
    font-weight: 500;
    padding: 10px 0;
    flex-direction: column;

    span{
        margin: 3px 0;
        color: #2a008b;
        display: flex;
        align-items: center;
        
    }
    p{
            display: flex;
            align-items: center;
            
        }

`
