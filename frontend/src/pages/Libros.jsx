import { useEffect, useState } from "react";

import LibroFormulario from "../components/LibroFormulario";
import LibroTabla from "../components/LibroTabla";

import {
    obtenerLibros,
    crearLibro,
    actualizarLibro,
    eliminarLibro as borrarLibro
} from "../services/libroService";


function Libros() {


    // Aquí se guardan los libros que vienen de SQLite
    const [libros, setLibros] = useState([]);



    // Aquí se guarda el libro que estamos creando o editando
    const [libro, setLibro] = useState({

        titulo: "",
        autor: "",
        categoria: ""

    });



    // Ejecuta la carga cuando abrimos la página
    useEffect(() => {

        cargarLibros();

    }, []);




    // Trae los libros desde Spring Boot
    function cargarLibros() {


        obtenerLibros()

            .then(respuesta => {


                setLibros(respuesta.data);


            })

            .catch(error => {


                console.log(error);


            });


    }




    // Guarda o actualiza un libro
    function guardarLibro() {



        // Si tiene ID significa que estamos editando
        if (libro.id) {


            actualizarLibro(libro.id, libro)

                .then(() => {


                    cargarLibros();

                    limpiarFormulario();


                });



        }

        // Si no tiene ID significa que es nuevo
        else {


            crearLibro(libro)

                .then(() => {


                    cargarLibros();

                    limpiarFormulario();


                });


        }


    }




    // Limpia el formulario después de guardar
    function limpiarFormulario() {


        setLibro({

            titulo: "",
            autor: "",
            categoria: ""

        });


    }




    // Carga un libro dentro del formulario para editarlo
    function editarLibro(libroSeleccionado) {


        setLibro(libroSeleccionado);


    }





    // Elimina un libro de la base de datos
    function eliminarLibro(id) {


        borrarLibro(id)

            .then(() => {


                cargarLibros();


            });


    }




    return (

        <div className="container mt-4">


            <h1>
                Gestión de Libros
            </h1>



            <LibroFormulario

                libro={libro}

                setLibro={setLibro}

                guardarLibro={guardarLibro}

            />



            <LibroTabla

                libros={libros}

                editarLibro={editarLibro}

                eliminarLibro={eliminarLibro}

            />


        </div>

    );


}


export default Libros;
