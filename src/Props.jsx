import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/patron_prop/form/form'
import AbrirModal from './components/patron_prop/modal/AbrirModal'
import ListaTareas from './components/patron_prop/tarea/ListaTareas'
import ControlledForm from './components/patron_prop/controlledForm/ControlledForm'

function App() { 


  return (
    <> 
        {/*<Form />*/}
        {/*<AbrirModal />*/}
        {/*<ListaTareas />*/}
        <ControlledForm />
    </>
  )
}

export default App
