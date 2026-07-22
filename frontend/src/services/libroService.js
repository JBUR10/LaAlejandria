import axios from "axios";


const API_URL = "http://localhost:8080/api/libros";


// Obtener todos los libros
export function obtenerLibros() {

    return axios.get(API_URL);

}


// Obtener un libro por id
export function obtenerLibroPorId(id) {

    return axios.get(`${API_URL}/${id}`);

}


// Crear un libro
export function crearLibro(libro) {

    return axios.post(API_URL, libro);

}


// Actualizar un libro
export function actualizarLibro(id, libro) {

    return axios.put(
        `${API_URL}/${id}`,
        libro
    );

}


// Eliminar un libro
export function eliminarLibro(id) {

    return axios.delete(`${API_URL}/${id}`);

}
