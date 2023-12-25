Feature: realizar una compra de 2 productos en demoblaze

    Feature Para realizar la compra de los productos no se requiere logueo.


    Background: Pre conditions
        Given Usuario ingresa a demoblaze

    Scenario Outline: El usuario compra 2 productos
        When el usuario selecciona el primer producto <Producto1>
        And el usuario vuelve al home
        And el usuario selecciona el segundo producto <Producto2>
        And el usuario ingresa al carrito
        And el usuario selecciona place order
        And el usuario rellena el formulario
        And el usuario selecciona purcharse
        Then el usuario visualiza el mensaje de confirmacion <Mensaje>
        Examples:
            | Producto1             |   Producto2           |   Mensaje                         |
            | Samsung galaxy s6     |   Samsung galaxy s7   |   Thank you for your purchase!    |
            | Nexus 6               |   Iphone 6 32gb       |   Thank you for your purchase!    |