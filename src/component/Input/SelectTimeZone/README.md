# InputSelectTimeZone

El componente InputSelectTimeZone permite a los usuarios seleccionar una zona horaria de una lista predefinida de zonas horarias, con opciones de personalización tanto para la apariencia como para el comportamiento.

### Importación

Para importar el componente InputSelectTimeZone, se puede hacer desde fenextjs

```tsx copy
import { InputSelectTimeZone } from "fenextjs";
```

### Parámetros

| Parámetro   | Tipo                            | Requerido | Default   | Descripcion                                                                                                 |
| ----------- | ------------------------------- | --------- | --------- | ----------------------------------------------------------------------------------------------------------- |
| useTOption  | boolean                         | no        | false     | Indica si se debe usar la opción traducida en lugar de los valores predeterminados para las zonas horarias. |
| id          | string                          | no        | undefined | ID del input select.                                                                                        |
| label       | string                          | no        | undefined | Etiqueta para el campo de selección de zona horaria.                                                        |
| className   | string                          | no        | ''        | Clase CSS para personalizar el contenedor del input.                                                        |
| placeholder | string                          | no        | undefined | Texto de marcador de posición que aparece cuando no hay selección.                                          |
| disabled    | boolean                         | no        | false     | Indica si el selector de zona horaria está deshabilitado.                                                   |
| value       | TimeZoneProps                   | no        | undefined | Valor seleccionado actualmente en el selector de zona horaria.                                              |
| onChange    | (value: TimeZoneProps) =\> void | no        | undefined | Función que se ejecuta cuando el valor seleccionado cambia.                                                 |
| isClearable | boolean                         | no        | false     | Indica si se puede limpiar el campo de selección.                                                           |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/input-inputselecttimezone--index)

### Usos

- InputSelectTimeZone básico

```tsx copy
<InputSelectTimeZone />
```

- InputSelectTimeZone con valor preseleccionado

```tsx copy
<InputSelectTimeZone value={selectedTimeZone} />
```

- InputSelectTimeZone con cambio de zona horaria

```tsx copy
<InputSelectTimeZone onChange={(zone) => console.log(zone)} />
```

- InputSelectTimeZone deshabilitado

```tsx copy
<InputSelectTimeZone disabled={true} />
```
