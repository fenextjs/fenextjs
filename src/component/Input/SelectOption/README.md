# InputSelectOption

El componente InputSelectOption permite mostrar opciones seleccionables con texto, imágenes o íconos, además de proporcionar funcionalidades adicionales como la eliminación de opciones y la personalización de eventos.

### Importación

Para importar el componente InputSelectOption, se puede hacer desde fenextjs

```tsx copy
import { InputSelectOption } from "fenextjs";
```

### Parámetros

| Parámetro             | Tipo                                        | Requerido | Default     | Descripcion                                                         |
| --------------------- | ------------------------------------------- | --------- | ----------- | ------------------------------------------------------------------- |
| id                    | string \| number                            | sí        | undefined   | ID de la opción, que puede ser un string o un número.               |
| text                  | string                                      | sí        | undefined   | Texto que se mostrará en la opción.                                 |
| img                   | string                                      | no        | undefined   | URL de la imagen que se mostrará en la opción, si es proporcionada. |
| imgComponent          | ImgProps                                    | no        | undefined   | Propiedades para personalizar el componente de imagen (Img).        |
| icon                  | ReactNode                                   | no        | undefined   | Icono que se mostrará junto al texto de la opción.                  |
| type                  | 'div' \| 'option' \| 'multiple'             | no        | 'div'       | Define el tipo de opción que se renderiza: div, option, o multiple. |
| disabled              | boolean                                     | no        | false       | Indica si la opción está deshabilitada.                             |
| selected              | boolean                                     | no        | false       | Indica si la opción está seleccionada.                              |
| hidden                | boolean                                     | no        | false       | Indica si la opción está oculta.                                    |
| onClick               | (item: InputSelectOptionBaseProps) =\> void | no        | undefined   | Función que se ejecuta al hacer click en la opción.                 |
| onDelete              | (item: InputSelectOptionBaseProps) =\> void | no        | undefined   | Función que se ejecuta al eliminar la opción.                       |
| isBtn                 | boolean                                     | no        | false       | Indica si la opción se debe comportar como un botón.                |
| data                  | T                                           | no        | undefined   | Datos personalizados asociados con la opción.                       |
| iconDelete            | ReactNode                                   | no        | \<Trash /\> | Icono personalizado para la eliminación de la opción.               |
| classNameOption       | string                                      | no        | ''          | Clase CSS para personalizar la opción.                              |
| classNameOptionImg    | string                                      | no        | ''          | Clase CSS para personalizar la imagen de la opción.                 |
| classNameOptionDelete | string                                      | no        | ''          | Clase CSS para personalizar el botón de eliminar de la opción.      |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/input-inputselectoption--index)

### Usos

- Opción básica

```tsx copy
<InputSelectOption id={1} text="Opción 1" />
```

- Opción con imagen

```tsx copy
<InputSelectOption id={2} text="Opción 2" img="/path/to/img.jpg" />
```

- Opción con acción personalizada

```tsx copy
<InputSelectOption
  id={3}
  text="Opción 3"
  onClick={(item) => console.log(item)}
/>
```

- Opción deshabilitada

```tsx copy
<InputSelectOption id={4} text="Opción 4" disabled={true} />
```
