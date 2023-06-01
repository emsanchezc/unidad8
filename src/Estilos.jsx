import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ModalEstilo from './components/modal/ModalEstilo'
import BotonEstilo from './components/boton/BotonEstilo'

function App() { 

    const [showWarning, setShowWarning] = useState(false);
    const [showDanger, setShowDanger] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const abrirModalWarning = () => setShowWarning(true);
    const abrirModalDanger = () => setShowDanger(true);
    const abrirModalSuccess = () => setShowSuccess(true);

  return (
    <>
        <BotonEstilo variant="warning" onClick={abrirModalWarning}>
            Mostrar Warning
        </BotonEstilo>

        <ModalEstilo show={showWarning} onHide={() => setShowWarning(false)} type="warning">
            <ModalEstilo.Header closeButton>
                <ModalEstilo.Title>Modal Warning</ModalEstilo.Title>
            </ModalEstilo.Header>
            <ModalEstilo.Body>
                <p>Este es un Warning</p>
            </ModalEstilo.Body>
        </ModalEstilo>

        <BotonEstilo variant="danger" onClick={abrirModalDanger}>
            Mostrar Danger
        </BotonEstilo>

        <ModalEstilo show={showDanger} onHide={() => setShowDanger(false)} type="danger">
            <ModalEstilo.Header closeButton>
                <ModalEstilo.Title>Modal Danger</ModalEstilo.Title>
            </ModalEstilo.Header>
            <ModalEstilo.Body>
                <p>Este es un Danger</p>
            </ModalEstilo.Body>
        </ModalEstilo>

        <BotonEstilo variant="success" onClick={abrirModalSuccess}>
            Mostrar Success
        </BotonEstilo>

        <ModalEstilo show={showSuccess} onHide={() => setShowSuccess(false)} type="success">
            <ModalEstilo.Header closeButton>
                <ModalEstilo.Title>Modal Success</ModalEstilo.Title>
            </ModalEstilo.Header>
            <ModalEstilo.Body>
                <p>Este es un Success</p>
            </ModalEstilo.Body>
        </ModalEstilo>
    </>
  )
}

export default App
