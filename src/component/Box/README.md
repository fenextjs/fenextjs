# Box

El componente Box actúa como un contenedor básico que encapsula su contenido, permitiendo aplicar estilos personalizados mediante clases adicionales.

### Importación

Para importar el componente Box, se puede hacer desde fenextjs

```tsx copy
import { Box } from "fenextjs";
```

### Parámetros

| Parámetro | Tipo      | Requerido | Default | Descripcion                                                |
| --------- | --------- | --------- | ------- | ---------------------------------------------------------- |
| children  | ReactNode | sí        |         | El contenido que se renderizará dentro del componente Box. |
| className | string    | no        | ""      | Clase personalizada para el componente Box.                |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/box-box--index)

### Usos

- Básico

```tsx copy
<Box>Este es un contenedor básico</Box>
```

- Box con clase personalizada

```tsx copy
<Box className="custom-class">Contenido con clase personalizada</Box>
```
