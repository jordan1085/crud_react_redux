import { useDispatch } from 'react-redux';
import ListadaoUsuarios from './ListadoUsuarios';
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { crearNuevoUsuarioAction } from '../actions/usuariosActions';

const Formulario = () => {

    // Llamando action con dispatch
    const dispatch = useDispatch();

    // Hook form 
    const {control, formState: { errors }, handleSubmit } = useForm();
    const handleRegistration = user => {
        dispatch(crearNuevoUsuarioAction(user))
    }

    return (
        <Row className="justify-content-center">
            <Col sm={4}>
                <Card className="card-body mt-4">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Crear Usuario
                    </h2>
                    <Form onSubmit={handleSubmit(handleRegistration)}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>User Name</Form.Label>
                            <Controller
                                name="name"
                                placeholder="Full Name"
                                control={control}
                                rules={{ required: "Este campo es obligatorio" }}
                                defaultValue=""
                                render={({ field }) => <Form.Control {...field} />}
                            />
                            <ErrorMessage 
                                errors={errors} 
                                name="name" />
                            <ErrorMessage 
                                errors={errors} 
                                name="singleErrorInput" 
                                render={({ message }) => <p>{message}</p>}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Controller
                                name="email"
                                type="email"
                                placeholder="Tu email"
                                control={control}
                                rules={{ required: 'El campo email es olbigatorio' }}
                                defaultValue="example@gmail.com"
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
                                render={({ message }) => <p>{message}</p>}/>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Crear
                        </Button>
                    </Form>
                </Card>
            </Col>
            <Col sm={8}>
                <div className="mt-4">
                    <ListadaoUsuarios />
                </div>
            </Col>
        </Row>
    );
}

export default Formulario;