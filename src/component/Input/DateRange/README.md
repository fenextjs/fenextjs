# InputDateRange

El componente InputDateRange permite a los usuarios seleccionar un rango de fechas utilizando dos campos de entrada de fecha. Es útil para formularios donde se requiere seleccionar un inicio y un final de un período de tiempo.

### Importación

Para importar el componente InputDateRange, se puede hacer desde fenextjs

```tsx copy
import { InputDateRange } from "fenextjs";
```

### Parámetros

| Parámetro                               | Tipo                           | Requerido | Default      | Descripcion                                                                         |
| --------------------------------------- | ------------------------------ | --------- | ------------ | ----------------------------------------------------------------------------------- |
| defaultValue                            | [Date, Date]                   | no        | undefined    | Valor predeterminado del rango de fechas.                                           |
| value                                   | [Date, Date]                   | no        | undefined    | Valor actual del rango de fechas. Si se proporciona, anula el valor predeterminado. |
| onChange                                | (value: [Date, Date]) =\> void | no        | undefined    | Función que se ejecuta cuando el rango de fechas cambia.                            |
| propsStart                              | InputDateBaseProps             | no        | \{\}         | Props adicionales para el campo de fecha de inicio.                                 |
| propsEnd                                | InputDateBaseProps             | no        | \{\}         | Props adicionales para el campo de fecha de fin.                                    |
| label                                   | string                         | no        | ''           | Etiqueta que se muestra para el campo de rango de fechas.                           |
| classNameInputDateRange                 | string                         | no        | ''           | Clase CSS adicional para el contenedor del rango de fechas.                         |
| classNameInputDateRangeContentInputDate | string                         | no        | ''           | Clase CSS adicional para el contenido del campo de fecha en el rango.               |
| optional                                | boolean                        | no        | false        | Indica si el campo es opcional.                                                     |
| optionalText                            | string                         | no        | '(optional)' | Texto que se muestra si el campo es opcional.                                       |
| required                                | boolean                        | no        | false        | Indica si el campo es obligatorio.                                                  |
| requiredText                            | string                         | no        | '\*'         | Texto que se muestra si el campo es obligatorio.                                    |
| min                                     | Date                           | no        | undefined    | Fecha mínima válida para ambos campos de fecha.                                     |
| max                                     | Date                           | no        | undefined    | Fecha máxima válida para ambos campos de fecha.                                     |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/input-inputdaterange--index)

### Usos

- Selector de rango de fechas por defecto

```tsx copy
<InputDateRange
  defaultValue={[new Date(), new Date()]}
  onChange={(range) => console.log(range)}
/>
```

- Selector de rango de fechas con validación

```tsx copy
<InputDateRange
  value={[startDate, endDate]}
  onChange={(range) => validateRange(range)}
/>
```

- Selector de rango de fechas deshabilitado

```tsx copy
<InputDateRange defaultValue={[new Date(), new Date()]} disabled={true} />
```
