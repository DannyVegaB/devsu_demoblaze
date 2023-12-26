Feature: Validar el Api registro y Login de usuarios en demoblaze



Scenario Outline: Validar el registro de un usuario existente
Given Yo ingreso en el api un usuario <user> y clave <clave> existente
Examples:
|   user        | clave         |
|   dannyvega15 | Enero2023     |
|   dannyvega2  | Enero2023     |

Scenario Outline: Validar el registro de un usuario nuevo
Given Yo ingreso en el api un usuario <user> y clave <clave> nuevo
Examples:
|   user        | clave         |
|   dannyvega | Enero2023       |


Scenario Outline: Validar el Login de un usuario existente
Given Yo ingreso en el api un usuario <user> y clave <clave> validos
Examples:
|   user        | clave         |
|   dannyvega15 | Enero2023     |
|   dannyvega2  | Enero2023     |

Scenario Outline: Validar el Login de un usuario inexistente
Given Yo ingreso en el api un usuario <user> y clave <clave> invalida
Examples:
|   user        | clave          |
|   dannyvega105 | Enero2023     |
|   dannyvega200 | Enero2023     |


