import styled from 'styled-components';

export const Nav = styled.nav`
background-color: #2E3440;
width: 100%;
position: fixed;
top: 0;
display: flex;
`

export const Menu = styled.div`
display: flex;
height:66px;
padding: 10px;
width: 80%;
margin: auto;
@media (max-width: 768px) {
    width: 100%;
  }
`

export const List = styled.ul`
text-align: right;
list-style-type: none;
padding: 0;
margin: 0;
flex: 1;

@media (max-width: 768px) {
    background-color:  #2E3440;
    text-align: center;
  }
`
export const ListItem = styled.li`
display: inline-block;
margin-top:20px;
padding-left:20px;
@media (max-width: 768px) {
    display: block;
    margin: 0;
    padding: 0;
    background-color: #2E3440;
  }
`

export const Logo = styled.div`
flexGrow: 1;
`
export const styledLink = {
  textDecoration: "none",
  color: "#fff",
  textTransform: "uppercase",
  display: "block",
}

export const LogoImg = styled.img`
width: 100%;
height: 100%;
`

export const MobileMenuIcon = styled.div`
width: 48px;
color: #fff;
font-size: 24px;
text-align: center;
padding: 18px;
display: none;
@media (max-width: 768px) {
    display: block;
  }
`