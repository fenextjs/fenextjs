# InputSelect

El componente InputSelect proporciona una interfaz interactiva que permite a los usuarios seleccionar opciones de una lista, con la posibilidad de búsqueda y personalización avanzada.

### Importación

Para importar el componente InputSelect, se puede hacer desde fenextjs

```tsx copy
import { InputSelect } from "fenextjs";
```

### Parámetros

| Parámetro                   | Tipo                                                      | Requerido | Default         | Descripcion                                                                           |
| --------------------------- | --------------------------------------------------------- | --------- | --------------- | ------------------------------------------------------------------------------------- |
| options                     | InputSelectItemOptionBaseProps[]                          | sí        |                 | Lista de opciones disponibles en el select.                                           |
| filterOptions               | function                                                  | no        | undefined       | Función personalizada para filtrar las opciones del select.                           |
| showOptions                 | 'hover' \| 'focus' \| 'focus-hover'                       | no        | 'focus'         | Define cuándo mostrar las opciones del select.                                        |
| hiddenOptions               | 'not-hover' \| 'not-focus' \| 'not-focus-hover'           | no        | 'not-hover'     | Define cuándo ocultar las opciones del select.                                        |
| defaultValue                | InputSelectItemOptionBaseProps                            | no        | undefined       | Valor por defecto seleccionado en el select.                                          |
| typeSelect                  | 'div' \| 'select' \| 'datalist'                           | no        | 'div'           | Define el tipo de elemento select.                                                    |
| typeSelectStyle             | 'normal' \| 'normal-out' \| 'box' \| 'list' \| 'checkbox' | no        | 'normal'        | Estilos aplicados al componente select.                                               |
| useSwichtypeSelectStyle     | boolean                                                   | no        | false           | Permite alternar entre estilos de tipo select.                                        |
| useTOption                  | boolean                                                   | no        | false           | Indica si se debe usar una opción traducida (useTOption).                             |
| value                       | InputSelectItemOptionBaseProps                            | no        |                 | Valor actual del select.                                                              |
| noResult                    | InputSelectItemOptionBaseProps                            | no        |                 | Valor que se muestra cuando no hay resultados en la búsqueda.                         |
| loaderOption                | InputSelectItemOptionBaseProps                            | no        |                 | Opción que se muestra mientras se cargan las opciones.                                |
| selected                    | InputSelectItemOptionBaseProps                            | no        |                 | Opción actualmente seleccionada.                                                      |
| create                      | InputSelectItemOptionBaseProps                            | no        |                 | Opción que permite crear un nuevo valor en el select.                                 |
| onCreate                    | function                                                  | no        |                 | Función que se ejecuta cuando se crea un nuevo valor.                                 |
| isSelectClearText           | boolean                                                   | no        | false           | Indica si se puede limpiar el texto del select.                                       |
| isSelectChangeText          | boolean                                                   | no        | true            | Indica si se puede cambiar el texto del select.                                       |
| onChange                    | function                                                  | no        |                 | Función que se ejecuta cuando cambia el valor seleccionado.                           |
| onChangeData                | function                                                  | no        |                 | Función que se ejecuta cuando cambia el valor de los datos seleccionados.             |
| onChangeText                | function                                                  | no        |                 | Función que se ejecuta cuando cambia el texto del select.                             |
| onChangeValidate            | function                                                  | no        |                 | Función personalizada de validación que se ejecuta cuando cambia el valor del select. |
| iconCloseMovil              | ReactNode                                                 | no        | \<Cancel /\>    | Ícono que se muestra para cerrar el select en vista móvil.                            |
| clearContent                | ReactNode                                                 | no        | 'Clear'         | Contenido que se muestra para limpiar la selección.                                   |
| searchById                  | boolean                                                   | no        | false           | Indica si la búsqueda se realiza por ID.                                              |
| iconSearch                  | ReactNode                                                 | no        | \<SVGSearch /\> | Ícono de búsqueda que se muestra en el select.                                        |
| changeByFirstOptionInOnBlur | boolean                                                   | no        | false           | Cambia al valor de la primera opción cuando el input pierde el foco.                  |
| maxLengthShowOptions        | number                                                    | no        | 20              | Cantidad máxima de opciones que se muestran.                                          |
| nItems                      | number                                                    | no        |                 | Número de ítems que se muestran en el select.                                         |
| showOptionIconImg           | boolean                                                   | no        | true            | Muestra íconos de imagen junto a las opciones del select.                             |
| validatorData               | FenextjsValidatorClass                                    | no        |                 | Clase de validación utilizada para validar los datos de entrada del select.           |
| forceShowOptionOnLoad       | boolean                                                   | no        | false           | Forza a mostrar las opciones al cargar el componente.                                 |
| iconDelete                  | ReactNode                                                 | no        | \<Trash /\>     | Ícono personalizado para eliminar una opción.                                         |
| useSearch                   | boolean                                                   | no        | true            | Determina si el selector filtra los elementos por el texto escrito.                   |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/input-inputselect--index)

### Usos

- Básico

```tsx copy
<InputSelect options={options} />
```

- InputSelect con filtro de opciones

```tsx copy
<InputSelect options={options} filterOptions={filterOptions} />
```

- InputSelect con icono de búsqueda

```tsx copy
<InputSelect options={options} iconSearch={<SVGSearch />} />
```

- InputSelect con opción personalizada de crear

```tsx copy
<InputSelect
  options={options}
  onCreate={() => console.log("Crear nueva opción")}
/>
```
