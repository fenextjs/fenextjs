# GridCols

El componente GridCols permite organizar elementos en una cuadrícula flexible, con la posibilidad de definir diferentes configuraciones de columnas según el tamaño de la pantalla.

### Importación

Para importar el componente GridCols, se puede hacer desde fenextjs

```tsx copy
import { GridCols } from "fenextjs";
```

### Parámetros

| Parámetro   | Tipo      | Requerido | Default   | Descripcion                                                             |
| ----------- | --------- | --------- | --------- | ----------------------------------------------------------------------- |
| children    | ReactNode | no        | undefined | Contenido o elementos que se mostrarán dentro de la cuadrícula.         |
| className   | string    | no        | ''        | Clase CSS adicional para personalizar el contenedor de la cuadrícula.   |
| cols        | string    | no        | '1fr'     | Configuración de columnas por defecto usando CSS Grid.                  |
| colsMin1920 | string    | no        | undefined | Configuración de columnas para pantallas con un ancho mínimo de 1920px. |
| colsMin1680 | string    | no        | undefined | Configuración de columnas para pantallas con un ancho mínimo de 1680px. |
| colsMin1440 | string    | no        | undefined | Configuración de columnas para pantallas con un ancho mínimo de 1440px. |
| colsMin1024 | string    | no        | undefined | Configuración de columnas para pantallas con un ancho mínimo de 1024px. |
| colsMin992  | string    | no        | undefined | Configuración de columnas para pantallas con un ancho mínimo de 992px.  |
| colsMin768  | string    | no        | undefined | Configuración de columnas para pantallas con un ancho mínimo de 768px.  |
| colsMin575  | string    | no        | undefined | Configuración de columnas para pantallas con un ancho mínimo de 575px.  |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/component-gridcols--index)

### Usos

- Uso básico

```tsx copy
<GridCols>
  <div>Item 1</div>
  <div>Item 2</div>
</GridCols>
```

- GridCols con diferentes columnas

```tsx copy
<GridCols cols="repeat(3, 1fr)">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</GridCols>
```

- GridCols con configuración responsiva

```tsx copy
<GridCols colsMin768="repeat(2, 1fr)" colsMin1024="repeat(3, 1fr)">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</GridCols>
```
