import { Button, Form, Container, Card } from "react-bootstrap";
import { crearUsuario } from "../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (usuarioNuevo) => {
    console.log(usuarioNuevo);
    //Pedir a la api crear producto. Si la respuesta es 201 entonces creo el producto, de lo contrario, mensaje de error
    crearUsuario(usuarioNuevo).then((respuesta) => {
      if (respuesta && respuesta.status === 201) {
        Swal.fire(
          "Usuario creado",
          `El usuario ${usuarioNuevo.nombreUsuario} fue creado correctamente`,
          "success"
        );
        reset();
      } else {
        Swal.fire(
          "Oops! Ocurrio un error",
          `El usuario ${usuarioNuevo.nombreUsuario} no fue creado correctamente, intente nuevamente mas tarde`,
          "error"
        );
      }
    });
  };

  return (
    <Container className="mainSection">
      <Card className="align-items-center border-0">
        <Card className="my-5 col-lg-6 rounded-0 border-0 cards-disenio">
          <h5 className="text-center">Registro</h5>
          <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingrese un email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese un email"
                  {...register("email", {
                    required: "El correo electronico es obligatorio",
                    pattern: {
                      value:
                        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                      message:
                        "El email debe tener un formato valido (example@dominio.com)",
                    },
                  })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingrese un nombre de usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese un usuario"
                  {...register("nombreUsuario", {
                    required: "El nombre de usuario es obligatorio",
                    minLength: {
                      value: 2,
                      message:
                        "La cantidad minima de caracteres es de 2 digitos",
                    },
                    maxLength: {
                      value: 100,
                      message:
                        "La cantidad minima de caracteres es de 2 digitos",
                    },
                  })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contrasena</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese una contrasena"
                  {...register("password", {
                    required: "La contrasena es obligatoria",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                      message:
                        "La contrasena debe contener entre 8 y 16 caracteres y debe incluir numeros, caracteres en mayuscula, miniscula y almenos un caracter especial",
                    },
                  })}
                />
              </Form.Group>
              <Button variant="dark" type="submit">
                Registrarse
              </Button>
              <Button variant="primary ms-3" type="submit">
                Ya tengo cuenta
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Card>
    </Container>
  );
};

export default Registro;
