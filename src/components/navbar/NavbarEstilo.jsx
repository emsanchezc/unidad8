import { Nav, Navbar as NavbarBootstrap, Nav as NavBootstrap, Container} from 'react-bootstrap';

const NavbarEstilo = ({ children, style, ...props }) => {

    return (
        <NavbarBootstrap style={{ width: '18rem', ...style }} {...props}>
            <Container>
                {children}
            </Container>
        </NavbarBootstrap>
    );

};

NavbarEstilo.Brand = NavbarBootstrap.Brand;
NavbarEstilo.Toggle = NavbarBootstrap.Toggle;
NavbarEstilo.Collapse = NavbarBootstrap.Collapse;
NavbarEstilo.Link = NavBootstrap.Link;
NavbarEstilo.Nav = NavBootstrap;

export default NavbarEstilo;