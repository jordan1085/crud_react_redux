import React from 'react';
import { Button, Modal, Form} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { editarUsuariosAction } from '../actions/usuariosActions';

const ModalEdit = (props) => {

    // Llamando action con dispatch
    const dispatch = useDispatch();

    // Hook form 
    const {control, formState: { errors }, handleSubmit } = useForm();

    // Usuario a editar
    const userData = useSelector(state => state.usuarios.editarusuario);
    if(!userData) return null;

    const {name, email} = userData;

    // Submit
    const handleRegistration = user => {
        dispatch(editarUsuariosAction({
            'id': userData.id,
            'name': user.name,
            'email': user.email
        }))
    }
    
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Editar Usuario
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(handleRegistration)}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>User Name</Form.Label>
                            <Controller
                                name="name"
                                placeholder="Full Name"
                                control={control}
                                rules={{ required: "Este campo es obligatorio" }}
                                defaultValue={name}
                                render={({ field }) => <Form.Control {...field} />}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="name" />
                            <ErrorMessage
                                errors={errors}
                                name="singleErrorInput"
                                render={({ message }) => <p>{message}</p>} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Controller
                                name="email"
                                type="email"
                                placeholder="Tu email"
                                control={control}
                                rules={{ required: 'El campo email es olbigatorio' }}
                                defaultValue={email}
                                render={({ field }) => <Form.Control {...field} />}
                            />
                            <Form.Text className="text-muted">
                                Ingresa un correo valido.
                            </Form.Text>
                            <ErrorMessage
                                errors={errors}
                                name="email" />
                            <ErrorMessage
                                errors={errors}
                                name="singleErrorInput"
                                render={({ message }) => <p>{message}</p>} />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mr-3" onClick={props.onHide}>
                            Editar
                        </Button>
                        <Button onClick={props.onHide}>Cerrar</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>

    );
}

export default ModalEdit;
