# Title

El componente Title representa un título de encabezado con soporte para diferentes niveles (`h1` a `h6`), opcionalmente muestra un loader y permite personalización mediante clases CSS.

### Importación

Para importar el componente Title, se puede hacer desde fenextjs

```tsx copy
import { Title } from "fenextjs";
```

### Parámetros

| Parámetro | Tipo                                         | Requerido | Default   | Descripcion                                                                       |
| --------- | -------------------------------------------- | --------- | --------- | --------------------------------------------------------------------------------- |
| tag       | 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' | no        | 'h1'      | Define el nivel de encabezado que se utiliza para el componente.                  |
| loader    | boolean                                      | no        | false     | Indica si el componente está en estado de carga, mostrando un indicador de carga. |
| className | string                                       | no        | ''        | Clase CSS para personalizar el contenedor del título.                             |
| children  | ReactNode                                    | sí        | undefined | Contenido o texto que se muestra dentro del título.                               |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/title-title--index)

### Usos

- Título básico

```tsx copy
<Title>Mi título</Title>
```

- Título con nivel h2

```tsx copy
<Title tag="h2">Subtítulo</Title>
```

- Título con loader

```tsx copy
<Title loader={true}>Cargando...</Title>
```

- Título personalizado con clase

```tsx copy
<Title className="custom-title">Título personalizado</Title>
```
