import {
    CREAR_USUARIO,
    CREAR_USUARIO_EXITO,
    CREAR_USUARIO_ERROR,
    MOSTRAR_USUARIOS,
    MOSTRAR_USUARIOS_EXITO,
    MOSTRAR_USUARIOS_ERROR,
    OBTENER_USUARIO_EDITAR,
    EDITAR_USUARIOS_EXITO,
    EDITAR_USUARIOS_ERROR,
    OBTENER_USUARIO_BORRAR,
    ELIMINAR_USUARIOS_EXITO,
    ELIMINAR_USUARIOS_ERROR
} from '../types'

const initialState = {
    usuarios: [],
    error: null,
    loading: false,
    eliminarusuario: null,
    editarusuario: null
}

export default function state(state=initialState, action) {
    switch(action.type) {
        case CREAR_USUARIO:
            return {
                ...state,
                loading: action.payload
            }
        case CREAR_USUARIO_EXITO:
            return {
                ...state,
                loading: false,
                usuarios: action.payload
            }
        case CREAR_USUARIO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case MOSTRAR_USUARIOS:
            return {
                ...state,
                loading: action.payload
            }
        case MOSTRAR_USUARIOS_EXITO:
            return {
                ...state,
                usuarios: action.payload,
                loading: false,
                error: null
            }
        case MOSTRAR_USUARIOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }   
        case OBTENER_USUARIO_EDITAR:
            return{
                ...state,
                editarusuario: action.payload
            }
        case EDITAR_USUARIOS_EXITO:
            return {
                ...state,
                loading: false,
                editarusuario: null,
                usuarios: state.usuarios.map(usuario =>
                    usuario.id === action.payload.id ? usuario = action.payload : usuario     
                )
            }
        case EDITAR_USUARIOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case OBTENER_USUARIO_BORRAR:
            return {
                ...state,
                eliminarusuario: action.payload
            }
        case ELIMINAR_USUARIOS_EXITO:
            return {
                ...state,
                usuarios: state.usuarios.filter(usuario => usuario.id !== state.eliminarusuario),
                eliminarusuario: null
            }
        case ELIMINAR_USUARIOS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}