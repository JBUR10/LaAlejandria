function LibroFormulario({ libro, setLibro, guardarLibro }) {


    const manejarCambio = (e) => {

        setLibro({
            ...libro,
            [e.target.name]: e.target.value
        });

    };


    return (

        <div className="card p-4 mb-4">

            <h3>
                {libro.id ? "Editar libro" : "Nuevo libro"}
            </h3>


            <input
                className="form-control mb-3"
                type="text"
                name="titulo"
                placeholder="Título"
                value={libro.titulo}
                onChange={manejarCambio}
            />


            <input
                className="form-control mb-3"
                type="text"
                name="autor"
                placeholder="Autor"
                value={libro.autor}
                onChange={manejarCambio}
            />


            <input
                className="form-control mb-3"
                type="text"
                name="categoria"
                placeholder="Categoría"
                value={libro.categoria}
                onChange={manejarCambio}
            />


            <button
                className="btn btn-primary"
                onClick={guardarLibro}
            >
                Guardar
            </button>


        </div>

    );

}


export default LibroFormulario;
