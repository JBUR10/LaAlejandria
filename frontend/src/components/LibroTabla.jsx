function LibroTabla({ libros, editarLibro, eliminarLibro }) {


    return (

        <table className="table table-striped">


            <thead className="table-dark">

                <tr>

                    <th>ID</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Categoría</th>
                    <th>Acciones</th>

                </tr>

            </thead>


            <tbody>


                {
                    libros.map((libro) => (

                        <tr key={libro.id}>

                            <td>
                                {libro.id}
                            </td>


                            <td>
                                {libro.titulo}
                            </td>


                            <td>
                                {libro.autor}
                            </td>


                            <td>
                                {libro.categoria}
                            </td>


                            <td>

                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => editarLibro(libro)}
                                >
                                    Editar
                                </button>


                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => eliminarLibro(libro.id)}
                                >
                                    Eliminar
                                </button>


                            </td>


                        </tr>

                    ))
                }


            </tbody>


        </table>

    );

}


export default LibroTabla;
