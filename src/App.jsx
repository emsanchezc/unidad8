import 'bootstrap/dist/css/bootstrap.min.css'
import { Tabs, Tab, TabPanel } from './components/tabs/Tabs'
import BotonEstilo from './components/boton/BotonEstilo'
import CardEstilo from './components/card/CardEstilo'
import NavbarEstilo from './components/navbar/NavbarEstilo'
import { Container } from 'react-bootstrap'

function App() { 

  return (
    <>
        <NavbarEstilo style={{backgroundColor: 'blue', color:'white', width:'800px' }}>
          <NavbarEstilo.Brand href="#home">Navbar</NavbarEstilo.Brand>
          <NavbarEstilo.Toggle aria-controls="basic-navbar-nav" />
          <NavbarEstilo.Nav>
            <NavbarEstilo.Link href="#home">Home</NavbarEstilo.Link>
            <NavbarEstilo.Link href="#link">Link</NavbarEstilo.Link>
            <NavbarEstilo.Link href="#link">Link</NavbarEstilo.Link>
          </NavbarEstilo.Nav>
        </NavbarEstilo>

        <NavbarEstilo style={{backgroundColor: 'red', color:'white', width:'400px' }}>
          <NavbarEstilo.Brand href="#home">Navbar</NavbarEstilo.Brand>
          <NavbarEstilo.Toggle aria-controls="basic-navbar-nav" />
          <NavbarEstilo.Nav>
            <NavbarEstilo.Link href="#home">Home</NavbarEstilo.Link>
            <NavbarEstilo.Link href="#link">Link</NavbarEstilo.Link>
            <NavbarEstilo.Link href="#link">Link</NavbarEstilo.Link>
          </NavbarEstilo.Nav>
        </NavbarEstilo>

        <NavbarEstilo style={{backgroundColor: 'green', color:'white', width:'200px' }}>
          <NavbarEstilo.Brand href="#home">Navbar</NavbarEstilo.Brand>
          <NavbarEstilo.Toggle aria-controls="basic-navbar-nav" />
          <NavbarEstilo.Nav>
            <NavbarEstilo.Link href="#home">Home</NavbarEstilo.Link>
            <NavbarEstilo.Link href="#link">Link</NavbarEstilo.Link>
            <NavbarEstilo.Link href="#link">Link</NavbarEstilo.Link>
          </NavbarEstilo.Nav>
        </NavbarEstilo>

      <Tabs>
        <Tab eventKey="inicio" title="Pestaña Inicial">
          <TabPanel>
            <h1>Tab 1</h1>
            <p>Contenido Tab 1</p>
          </TabPanel>
        </Tab>
        <Tab eventKey="contacto" title="Pestaña contacto">
          <TabPanel>
            <h1>Tab 2</h1>
            <p>Contenido Tab 2</p>
          </TabPanel>
        </Tab>
        <Tab eventKey="login" title="Pestaña login">
          <TabPanel>
            <h1>Tab 3</h1>
            <p>Contenido Tab 3</p>
          </TabPanel>
        </Tab>
        <Tab eventKey="registro" title="Registro">
          <TabPanel>
            <h1>Tab Registro</h1>
            <p>Contenido Tab 4</p>
            <button className="btn btn-primary">Enviar</button>
          </TabPanel>
        </Tab>
      </Tabs>
      <BotonEstilo style={{backgroundColor: 'red', color: 'white', margin: '10px'}} 
        variant="primary"
        size="lg"
      >
        Boton de estilo
      </BotonEstilo>
      <BotonEstilo style={{backgroundColor: 'blue', color: 'white' , margin: '20px'}}
        variant="success"
        size="sm"
      >
        Boton de estilo 2
      </BotonEstilo>
      <BotonEstilo style={{backgroundColor: 'green', color: 'white', margin: '30px'}}
        variant="danger"
        size="lg"
      >
        Boton de estilo 3
      </BotonEstilo>

      <CardEstilo style={{margin: '10px', backgroundColor: 'green', color: 'white' }}>
        <CardEstilo.Header>Header</CardEstilo.Header>
        <CardEstilo.Body>
          <CardEstilo.Title>Card Title</CardEstilo.Title>
          <CardEstilo.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </CardEstilo.Text>
          <BotonEstilo variant="primary" style={{backgroundColor:'red', border:'1px'}}>Go somewhere</BotonEstilo>
        </CardEstilo.Body>
      </CardEstilo>





    </>
  )
}

export default App
