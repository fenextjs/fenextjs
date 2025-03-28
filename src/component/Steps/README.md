# Steps

El componente Steps proporciona una interfaz para mostrar y navegar entre pasos en un proceso secuencial, permitiendo personalizar el contenido, la navegación y la apariencia de cada paso.

### Importación

Para importar el componente Steps, se puede hacer desde fenextjs

```tsx copy
import { Steps } from "fenextjs";
```

### Parámetros

| Parámetro                | Tipo                                       | Requerido | Default    | Descripcion                                                                                          |
| ------------------------ | ------------------------------------------ | --------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| items                    | StepsItemProps[]                           | sí        | []         | Los elementos que representan cada paso, incluyendo el contenido, etiqueta, ícono y estado del paso. |
| defaultStep              | number                                     | no        | 0          | El paso mostrado inicialmente.                                                                       |
| step                     | number                                     | no        | undefined  | Define manualmente el paso mostrado.                                                                 |
| useArrowKey              | boolean                                    | no        | true       | Indica si se pueden usar las teclas de flecha para navegar entre los pasos.                          |
| btnPrev                  | ReactNode                                  | no        | "Previous" | Contenido del botón de retroceso.                                                                    |
| btnNext                  | ReactNode                                  | no        | "Next"     | Contenido del botón de avance.                                                                       |
| disabledBtnPrev          | boolean                                    | no        | false      | Deshabilita el botón de retroceso.                                                                   |
| disabledBtnNext          | boolean                                    | no        | false      | Deshabilita el botón de avance.                                                                      |
| onPrev                   | (step: number) =\> Promise\<void\> \| void | no        | undefined  | Función que se ejecuta al hacer click en el botón de retroceso.                                      |
| onNext                   | (step: number) =\> Promise\<void\> \| void | no        | undefined  | Función que se ejecuta al hacer click en el botón de avance.                                         |
| onPrevDisabled           | () =\> void                                | no        | undefined  | Función que se ejecuta al hacer click en el botón de retroceso cuando esta deshabilitado.            |
| onNextDisabled           | () =\> void                                | no        | undefined  | Función que se ejecuta al hacer click en el botón de avance cuando esta deshabilitado.               |
| onSetStep                | (step: number) =\> void                    | no        | undefined  | Función que se ejecuta al establecer un nuevo paso.                                                  |
| stepPos                  | 'top' \| 'left' \| 'right'                 | no        | 'left'     | Posición de la lista de pasos.                                                                       |
| showCurrentStepNStep     | boolean                                    | no        | false      | Muestra el paso actual junto al total de pasos.                                                      |
| useDogs                  | boolean                                    | no        | false      | Indica si se debe utilizar un comportamiento especial (documentación adicional requerida).           |
| className                | string                                     | no        | ""         | Clase CSS para el contenedor del componente.                                                         |
| classNameContentSteps    | string                                     | no        | ""         | Clase CSS para el contenedor de los pasos.                                                           |
| classNameListSteps       | string                                     | no        | ""         | Clase CSS para la lista de pasos.                                                                    |
| classNameContentItems    | string                                     | no        | ""         | Clase CSS para los elementos de contenido.                                                           |
| classNameStep            | string                                     | no        | ""         | Clase CSS para cada paso.                                                                            |
| classNameStepActive      | string                                     | no        | ""         | Clase CSS para el paso activo.                                                                       |
| classNameItem            | string                                     | no        | ""         | Clase CSS para cada ítem.                                                                            |
| classNameItemActive      | string                                     | no        | ""         | Clase CSS para el ítem activo.                                                                       |
| classNameStepCircle      | string                                     | no        | ""         | Clase CSS para el círculo del paso.                                                                  |
| classNameStepLabel       | string                                     | no        | ""         | Clase CSS para la etiqueta del paso.                                                                 |
| classNameContentBtn      | string                                     | no        | ""         | Clase CSS para el contenedor de los botones de navegación.                                           |
| classNameBtn             | string                                     | no        | ""         | Clase CSS para los botones de navegación.                                                            |
| classNameBtnDisabled     | string                                     | no        | ""         | Clase CSS para los botones de navegación cuando esten deshabilitados.                                |
| classNameBtnNext         | string                                     | no        | ""         | Clase CSS para el botón de avance.                                                                   |
| classNameBtnNextDisabled | string                                     | no        | ""         | Clase CSS para el botón de avance cuando este deshabilitado.                                         |
| classNameBtnPrev         | string                                     | no        | ""         | Clase CSS para el botón de retroceso.                                                                |
| classNameBtnPrevDisabled | string                                     | no        | ""         | Clase CSS para el botón de retroceso cuando este deshabilitado.                                      |
| forceShowBtnPrev         | boolean                                    | no        | false      | Fuerza la visibilidad del botón de retroceso.                                                        |
| forceShowBtnNext         | boolean                                    | no        | false      | Fuerza la visibilidad del botón de avance.                                                           |

### StepsItemProps

Los items de step tienen su propios parametros:

| Parametro | Tipo                      | Descripción             |
| --------- | ------------------------- | ----------------------- |
| label     | ReactNode                 | Label del elemento.     |
| icon      | ReactNode                 | Icon del elemento.      |
| content   | ReactNode                 | Contenido del elemento. |
| status    | "none" \| "ok" \| "error" | Estatus del elemento.   |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/steps-steps--index)

### Usos

- Ejemplo básico

```tsx copy
<Steps
  items={[{ label: "Paso 1", content: <div>Contenido del Paso 1</div> }]}
/>
```

- Ejemplo con pasos personalizados

```tsx copy
<Steps
  items={[
    { label: "Inicio", content: <div>Contenido Inicio</div> },
    { label: "Fin", content: <div>Contenido Fin</div> },
  ]}
  stepPos="top"
/>
```

- Con botones deshabilitados

```tsx copy
<Steps disabledBtnPrev={true} disabledBtnNext={true} />
```
