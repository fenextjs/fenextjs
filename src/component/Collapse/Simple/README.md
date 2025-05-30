# Collapse

El componente Collapse permite mostrar u ocultar contenido dentro de un contenedor colapsable con opciones de personalización como control de estado activo, íconos, y estados de carga.

### Importación

Para importar el componente Collapse, se puede hacer desde fenextjs

```tsx copy
import { Collapse } from "fenextjs";
```

### Parámetros

| Parámetro                | Tipo                      | Requerido | Default     | Descripcion                                                                                  |
| ------------------------ | ------------------------- | --------- | ----------- | -------------------------------------------------------------------------------------------- |
| loader                   | boolean                   | no        | false       | Indica si el componente está en estado de carga, mostrando un ícono de cargando.             |
| disabled                 | boolean                   | no        | false       | Determina si el componente está deshabilitado, evitando que el usuario lo pueda interactuar. |
| defaultActive            | boolean                   | no        | false       | Determina si el Collapse estará activado de manera predeterminada.                           |
| active                   | boolean                   | no        | undefined   | Estado activo controlado externamente.                                                       |
| id                       | string                    | no        |             | ID único del componente.                                                                     |
| name                     | string                    | no        | ''          | Nombre del componente.                                                                       |
| status                   | 'none' \| 'error' \| 'ok' | no        | 'none'      | Estado del Collapse, puede ser 'none', 'error' o 'ok'.                                       |
| type                     | 'radio' \| 'checkbox'     | no        | 'checkbox'  | Define el tipo de interacción del componente, ya sea tipo 'radio' o 'checkbox'.              |
| show                     | 'checked' \| 'focus'      | no        | 'checked'   | Controla cómo se muestra el contenido del Collapse, ya sea cuando está 'checked' o 'focus'.  |
| header                   | ReactNode                 | sí        |             | El contenido del encabezado del Collapse.                                                    |
| onChange                 | (value: boolean) =\> void | no        |             | Función que se ejecuta cuando el estado activo del Collapse cambia.                          |
| iconArrow                | ReactNode                 | no        | \<Arrow /\> | Ícono que se mostrará como la flecha de colapso.                                             |
| rotateIcon               | boolean                   | no        | true        | Indica si el ícono debe rotar al expandirse el Collapse.                                     |
| useActiveForShowChildren | boolean                   | no        | false       | Si está habilitado, el contenido solo se cargara cuando el Collapse esté activo.             |
| children                 | ReactNode                 | no        |             | El contenido dentro del cuerpo del Collapse.                                                 |
| className                | string                    | no        | ''          | Clase CSS personalizada para el componente Collapse.                                         |
| classNameHeader          | string                    | no        | ''          | Clase CSS personalizada para el encabezado del Collapse.                                     |
| classNameHeaderContent   | string                    | no        | ''          | Clase CSS personalizada para el contenido del encabezado del Collapse.                       |
| classNameHeaderIcon      | string                    | no        | ''          | Clase CSS personalizada para el ícono del encabezado del Collapse.                           |
| classNameBody            | string                    | no        | ''          | Clase CSS personalizada para el cuerpo del Collapse.                                         |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/collapse-simple--index)

### Usos

- Collapse básico

```tsx copy
<Collapse header={<h3>Encabezado</h3>}>Contenido del collapse</Collapse>
```

- Collapse con estado de carga

```tsx copy
<Collapse header={<h3>Encabezado</h3>} loader={true}>
  Cargando...
</Collapse>
```

- Collapse controlado externamente

```tsx copy
const [active, setActive] = useState(false);
<Collapse
  header={<h3>Encabezado</h3>}
  active={active}
  onChange={(value) => setActive(value)}
>
  Contenido controlado
</Collapse>;
```
