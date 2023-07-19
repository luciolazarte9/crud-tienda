

const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_producto = import.meta.env.VITE_API_PRODUCTO;

export const login = async (usuario)=> {
    try {
        const respuesta = await fetch(URL_usuario);
        const listaUsuarios = await respuesta.json();

        const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email);
        if(usuarioBuscado){

            if(usuarioBuscado.password === usuario.password){
                return usuarioBuscado
            }else{
                console.log('mal la contrasena')
                return null;
            }
        }else{
            console.log('mal el email')
            return null;
        }
    }catch(error) {
        console.log(error);
    }
}

export const obtenerProductos = async ()=> {
    try{
        const respuesta = await fetch(URL_producto);
        const listaProductos = await respuesta.json();
        return listaProductos;
    }catch{
        console.log(error)
    }

}

export const obtenerUnProducto = async (id)=> {
    try{
        const respuesta = await fetch(URL_producto+'/'+id);
        const producto = await respuesta.json();
        return producto;
    }catch{
        console.log(error)
    }

}

export const crearProducto = async (producto) => {
    try {
      const fechaActual = new Date(); // fecha actual
      //formato de fecha
      const dia = fechaActual.getDate().toString().padStart(2, '0');
      const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
      const anio = fechaActual.getFullYear();
      producto.fecha = `${dia}/${mes}/${anio}`;
  
      const respuesta = await fetch(URL_producto, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
      });
  
      return respuesta;
    } catch{
      console.log(error);
    }
  };
  
  
export const borrarProducto = async (id)=> {
    try{
        const respuesta = await fetch(URL_producto+'/'+id,{
            method: "DELETE"
        });
        return respuesta;
    }catch{
        console.log(error)
    }

}

export const editarProducto = async (producto, id)=> {
    try{
        const respuesta = await fetch(URL_producto+'/'+id,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body : JSON.stringify(producto)
        });
        return respuesta;
    }catch{
        console.log(error)
    }

}

export const crearUsuario = async (usuario) => {
    try {
      const respuesta = await fetch(URL_usuario, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
      });
      return respuesta;
    }catch{
      console.log(error);
    }
  };
  