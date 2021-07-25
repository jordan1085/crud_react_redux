import React, {useState} from 'react';
// import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';
import ModalEdit from './ModalEditarUsuario';
import { useDispatch } from 'react-redux';
import { eliminarUsuariosAction, obtenerUsuarioEditAction} from '../actions/usuariosActions';

const Usuario = ({ usuario }) => {

    // Extract data
    const { name, email, id } = usuario;

    // Show modal
    const [modalShow, setModalShow] = useState(false);
    
    // Redux
    const dispatch = useDispatch();

    const confirmarEliminarUsuario = id => {
        dispatch(eliminarUsuariosAction(id))
    }

    const modalEditUsuario = user => {
        setModalShow(true)
        dispatch(obtenerUsuarioEditAction(user))
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td className="justify-content-center">
                <Button 
                    variant="success" 
                    className="mr-1" 
                    onClick={() => modalEditUsuario(usuario)}>
                    Editar
                </Button>
                <ModalEdit
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <Button 
                    variant="danger" 
                    onClick={() => confirmarEliminarUsuario(id)}>
                    Eliminar
                </Button>
            </td>
        </tr>
    );
}

export default Usuario;