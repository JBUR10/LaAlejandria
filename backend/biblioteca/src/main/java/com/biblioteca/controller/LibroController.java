package com.biblioteca.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.biblioteca.entity.Libro;
import com.biblioteca.service.LibroService;

@RestController
@RequestMapping("/api/libros")
@CrossOrigin(origins = "http://localhost:5173")
public class LibroController {

    private final LibroService libroService;

    public LibroController(LibroService libroService) {

        this.libroService = libroService;

    }

    @GetMapping
    public List<Libro> listar() {

        return libroService.listar();

    }

    @GetMapping("/{id}")
    public Libro buscar(@PathVariable Long id) {

        return libroService.buscarPorId(id);

    }

    @PostMapping
    public Libro guardar(@RequestBody Libro libro) {

        return libroService.guardar(libro);

    }

    @PutMapping("/{id}")
    public Libro actualizar(
            @PathVariable Long id,
            @RequestBody Libro libro) {

        Libro existente = libroService.buscarPorId(id);

        if (existente != null) {

            existente.setTitulo(libro.getTitulo());
            existente.setAutor(libro.getAutor());
            existente.setCategoria(libro.getCategoria());

            return libroService.guardar(existente);

        }

        return null;

    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {

        libroService.eliminar(id);

    }

}
