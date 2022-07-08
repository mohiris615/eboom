import { Link } from "react-router-dom"
function NavBar(){
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
    return (<li key={item.id}>
        <Link to={item.link}>{item.name}</Link>
    </li>)
});

    return (
        <nav>
            <div id="main-menu">
                <ul>
                   {navListItems}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;