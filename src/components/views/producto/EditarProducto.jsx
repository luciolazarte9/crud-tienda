import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerUnProducto, editarProducto } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();

  useEffect(() => {
    obtenerUnProducto(id).then((respuesta) => {
      console.log(respuesta);
      setValue('nombreProducto', respuesta.nombreProducto);
      setValue('precio', respuesta.precio);
      setValue('categoria', respuesta.categoria);
      setValue('color', respuesta.color);
      setValue('descripcion', respuesta.descripcion);
      setValue('talle', respuesta.talle);
      setValue('imagen', respuesta.imagen);
    });
  }, []);

  const onSubmit = (productoNuevo) => {
    console.log(productoNuevo);
    //Llamar a la peticion para editar un producto
    editarProducto(productoNuevo, id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Producto actualizado",
          `El producto: ${productoNuevo.nombreProducto} fue actualizado correctamente`,
          "success"
        );
        navegacion("/administrador");
      } else {
        Swal.fire(
          "Ocurrio un error",
          `El producto: ${productoNuevo.nombreProducto} no fue actualizado, intente esta operacion en breve`,
          "error"
        );
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Producto"
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 100,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor">
          <Form.Label>Color</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Negro"
            {...register("color", {
              required: "El color del producto es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 100,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.color?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Buzo elastico"
            {...register("descripcion", {
              required: "La descripcion del producto es obligatoria",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 100,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 500"
            {...register("precio", {
              required: "El precio del producto es obligatorio",
              min: {
                value: 1,
                message: "El precio minimo es de $1",
              },
              max: {
                value: 10000,
                message: "El precio maximo es de $10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La imagen es obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTalle">
          <Form.Label>Talle</Form.Label>
          <Form.Select
            {...register("talle", {
              required: "El talle es obligatorio",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </Form.Select>
          <Form.Text className="text-danger">{errors.talle?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoria es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Buzos">Buzos</option>
            <option value="Camperas">Camperas</option>
            <option value="Chombas">Chombas</option>
            <option value="Jeans">Jeans</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-5">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarProducto;
