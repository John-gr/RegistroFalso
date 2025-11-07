package com.example.RegistroFalso;

import org.springframework.web.bind.annotation.*;

@RestController
public class HolaController {

    @PostMapping("/saludo")
    public String saludo(@RequestParam String nombre, @RequestParam String apellidoP
            , @RequestParam String apellidoM, @RequestParam String correo) {
        return "<h1>Hola " + nombre + " " + apellidoP +
                " " + nombre + " " + correo + "</h1>";
    }
}
