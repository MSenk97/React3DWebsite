import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width:768px){
        width: 100%;
    }
`

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;

    @media only screen and (max-width:768px){
        width: 100%;
        padding: 10px;
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;

    @media only screen and (max-width:768px){
        display: none;
    }
`;

const Logo = styled.img`
    height: 50px;
`;

const List = styled.ul`
    display: flex;
    gap: 40px;
    font-size: 16px;
    list-style: none;
    @media only screen and (max-width:768px){
        display: none;
    }
`;

const ListItem = styled.li`
    cursor: pointer;
`;

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;


const Navbar = () => {
  return (
    <Section>
        <Container>
          <Links>
            <Logo src="./img/logo.png"></Logo>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Studio</ListItem>
                <ListItem>Works</ListItem>
                <ListItem>Contact</ListItem>
            </List>
          </Links>
          <Icons>
          <Icon src="./img/search.png"></Icon>
          <Button>Hire Now</Button>
          </Icons>
        </Container>
    </Section>
  )
}

export default Navbar