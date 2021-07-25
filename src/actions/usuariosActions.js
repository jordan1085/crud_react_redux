import clienteAxios from '../config/axios';
// import Swal from 'sweetalert2';
import {
    CREAR_USUARIO,
    CREAR_USUARIO_EXITO,
    CREAR_USUARIO_ERROR,
    MOSTRAR_USUARIOS,
    MOSTRAR_USUARIOS_EXITO,
    MOSTRAR_USUARIOS_ERROR,
    OBTENER_USUARIO_EDITAR,
    EDITAR_USUARIO,
    EDITAR_USUARIOS_EXITO,
    EDITAR_USUARIOS_ERROR,
    OBTENER_USUARIO_BORRAR,
    ELIMINAR_USUARIOS_EXITO,
    ELIMINAR_USUARIOS_ERROR
} from '../types'

export function crearNuevoUsuarioAction(user) {
    return async (dispatch) => {
        dispatch( crearUsuario() );

        try {
            const respuesta = await clienteAxios.post('user/', user);
            dispatch( crearUsuarioExito(respuesta.data) );
        } catch (error) {
            console.log(error);
            dispatch( crearUsuarioError(true) );
        }
    }
}

export function mostrarUsuariosAction() {
    return async (dispatch) => {
        dispatch( descargarUsuarios() );

        try {
            const respuesta = await clienteAxios.get('user/');
            dispatch(descargaUsuariosExitosa(respuesta.data))
        } catch (error) {
            console.log(error);
            dispatch(descargaUsuariosError())
        }
    }
}

export function obtenerUsuarioEditAction(user) {
    return async (dispatch) => {
        dispatch( obtenerEditarUsuarios(user) );
    }
}

export function editarUsuariosAction(user) {
    return async (dispatch) => {
        dispatch(editarUsuario(user))

        try {
            const respuesta = await clienteAxios.put(`user_update/${user.id}`, user);
            dispatch(editarUsuariosExitosas(respuesta.data[0]))
        } catch (error) {
            console.log(error);
            dispatch(editarUsuariosError(true))
        }
    }
}

export function eliminarUsuariosAction(id) {
    return async (dispatch) => {
        dispatch( obtenerUsuarioBorar(id) );

        try {
            await clienteAxios.delete(`user_delete/${id}`);
            dispatch(eliminarUsuariosExitosas())
        } catch (error) {
            dispatch(eliminarUsuariosError())
        }
    }
}

const crearUsuario = () => ({
    type: CREAR_USUARIO,
    payload: true
});

const crearUsuarioExito = user => ({
    type: CREAR_USUARIO_EXITO,
    payload: user
});

const crearUsuarioError = state => ({
    type: CREAR_USUARIO_ERROR,
    payload: state
});

const descargarUsuarios = () => ({
    type: MOSTRAR_USUARIOS,
    payload: true
});

const descargaUsuariosExitosa = user => ({
    type: MOSTRAR_USUARIOS_EXITO,
    payload: user
});

const descargaUsuariosError = () => ({
    type: MOSTRAR_USUARIOS_ERROR,
    payload: true
});

const obtenerEditarUsuarios = user => ({
    type: OBTENER_USUARIO_EDITAR,
    payload: user
});

const editarUsuario = () => ({
    type: EDITAR_USUARIO
});

const editarUsuariosExitosas = user => ({
    type: EDITAR_USUARIOS_EXITO,
    payload: user
});

const editarUsuariosError = state => ({
    type: EDITAR_USUARIOS_ERROR,
    payload: state
});

const obtenerUsuarioBorar = id => ({
    type: OBTENER_USUARIO_BORRAR,
    payload: id
});

const eliminarUsuariosExitosas = () => ({
    type: ELIMINAR_USUARIOS_EXITO
});

const eliminarUsuariosError = () => ({
    type: ELIMINAR_USUARIOS_ERROR,
    payload: true
});