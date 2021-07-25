import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {mostrarUsuariosAction} from '../actions/usuariosActions';
import Usuario from './Customer';

const ListadaoUsuarios = () => {

    const dispatch = useDispatch();

    // Acceder al state del store
    const usuarios = useSelector(state => state.usuarios.usuarios);

    useEffect(() => {
        const cargarUsuarios = () => dispatch(mostrarUsuariosAction()); 
        cargarUsuarios();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Aciones</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.lenght === 0 ? 'No hay usuarios' : (
                    usuarios.map(usuario => (
                        <Usuario 
                            key={usuario.id}
                            usuario={usuario}
                        />
                    ))
                )}
            </tbody>
        </Table>
    );
}

export default ListadaoUsuarios;