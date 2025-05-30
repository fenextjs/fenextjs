# InputRange

El componente InputRange permite la selección de un valor o rango de valores dentro de un intervalo definido. Se puede personalizar con clases CSS y manejar cambios en los valores mínimo, máximo o intermedio.

### Importación

Para importar el componente InputRange, se puede hacer desde fenextjs

```tsx copy
import { InputRange } from "fenextjs";
```

### Parámetros

| Parámetro             | Tipo                        | Requerido | Default | Descripcion                                                            |
| --------------------- | --------------------------- | --------- | ------- | ---------------------------------------------------------------------- |
| value                 | number                      | no        | 0       | El valor actual del input.                                             |
| valueMin              | number                      | no        | -100    | El valor mínimo permitido para el input.                               |
| valueMax              | number                      | no        | 100     | El valor máximo permitido para el input.                               |
| defaultValue          | number                      | no        | 0       | El valor inicial del input.                                            |
| defaultValueMin       | number                      | no        | -100    | El valor mínimo inicial del input.                                     |
| defaultValueMax       | number                      | no        | 100     | El valor máximo inicial del input.                                     |
| onChange              | function                    | no        |         | Función que se ejecuta cuando el valor del input cambia.               |
| onChangeRange         | function                    | no        |         | Función que se ejecuta cuando cambia el rango de valores del input.    |
| useRange              | boolean                     | no        | false   | Indica si se debe usar un rango de valores en lugar de un único valor. |
| min                   | number                      | no        | -100    | El valor mínimo permitido para el rango.                               |
| max                   | number                      | no        | 100     | El valor máximo permitido para el rango.                               |
| step                  | number                      | no        | 1       | El tamaño del paso para los valores del input.                         |
| showNumber            | 'top' \| 'bottom' \| 'none' | no        | 'top'   | Posición en la que se muestra el valor numérico del input.             |
| className             | string                      | no        |         | Clase CSS para personalizar el contenedor del input.                   |
| classNameContentRange | string                      | no        |         | Clase CSS para el contenedor del rango del input.                      |
| classNameMin          | string                      | no        |         | Clase CSS para el valor mínimo del input.                              |
| classNameMax          | string                      | no        |         | Clase CSS para el valor máximo del input.                              |
| classNameCurrent      | string                      | no        |         | Clase CSS para el valor actual del input.                              |
| classNameContentValue | string                      | no        |         | Clase CSS para el contenedor del valor del input.                      |
| classNameCircle       | string                      | no        |         | Clase CSS para los círculos del input.                                 |
| classNameLine         | string                      | no        |         | Clase CSS para las líneas del input.                                   |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/input-inputrange--index)

### Usos

- InputRange básico

```tsx copy
<InputRange />
```

- InputRange con rango activado

```tsx copy
<InputRange useRange={true} />
```

- InputRange con valor personalizado

```tsx copy
<InputRange value={50} />
```
