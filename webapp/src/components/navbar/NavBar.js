import { Link } from "react-router-dom";
import { Nav, List, ListItem, Logo, LogoImg, styledLink, Menu, MobileMenuIcon} from './NavBar.styled.js';
import logoPng from '../../assets/images/logo_text.png';
import { useState } from 'react';
import { FiAlignRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";

function NavBar(){

  const [active, setActive] = useState("");
  const [visibility, setVisibility] = useState(false);

    const navItems =
 [
    {id: 1, name: "Home", link: "/"},
    {id: 2, name: "Products", link: "/products"},
    {id: 3, name: "API", link: "/api"},
    {id: 4, name: "Blog", link: "/blog"},
    {id: 5, name: "Forum", link: "/forum"},
    {id: 6, name: "Faq", link: "/faq"},
    {id: 7, name: "Contact", link: "/contact"},
    {id: 8, name: "Demo", link: "/demo"},
  ];

  const navListItems= navItems.map(item => {
    return (
    <ListItem key={item.id}>
        <Link  to={item.link} style={styledLink}
        onClick={() => setActive(item.name)}
        className={active === item.name ? "isActive" : ""}
        >
          {item.name}
        </Link>
    </ListItem>)
});

    return (
        <Nav>
          <Menu id="main-menu" className={visibility? "isVisible" : "isHidden"}>
            <Logo>
              <Link to="/">
                <LogoImg src={logoPng} alt="Eboom Logo" />
              </Link>
            </Logo>
            <List className={visibility? "isVisible" : "isHidden"}>
              {navListItems}
            </List>
          </Menu>
          <MobileMenuIcon onClick={() => setVisibility((prevMenuState) => !prevMenuState )}>
            { visibility ? <FiX /> : <FiAlignRight /> }
            </MobileMenuIcon>
        </Nav>
    )
}

export default NavBar;