import { useState } from "react";

import LibroFormulario from "../components/LibroFormulario";
import LibroTabla from "../components/LibroTabla";


function Libros() {


    const [libros, setLibros] = useState([

        {
            id: 1,
            titulo: "Cien años de soledad",
            autor: "Gabriel García Márquez",
            categoria: "Novela"
        },

        {
            id: 2,
            titulo: "Clean Code",
            autor: "Robert Martin",
            categoria: "Programación"
        }

    ]);



    const [libro, setLibro] = useState({

        titulo: "",
        autor: "",
        categoria: ""

    });



    function guardarLibro() {


        if (libro.id) {


            setLibros(

                libros.map(

                    item => item.id === libro.id
                        ? libro
                        : item

                )

            );


        } else {


            const nuevo = {

                ...libro,
                id: Date.now()

            };


            setLibros([

                ...libros,
                nuevo

            ]);


        }



        setLibro({

            titulo: "",
            autor: "",
            categoria: ""

        });


    }



    function editarLibro(libroSeleccionado) {

        setLibro(libroSeleccionado);

    }



    function eliminarLibro(id) {


        setLibros(

            libros.filter(

                libro => libro.id !== id

            )

        );


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
