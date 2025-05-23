# LavaLamp

El componente LavaLamp genera un fondo animado que simula el efecto de una lámpara de lava con múltiples elementos flotantes. Los elementos pueden personalizarse en estilo, tamaño, animación y cantidad.

### Importación

Para importar el componente LavaLamp, se puede hacer desde fenextjs

```tsx copy
import { LavaLamp } from "fenextjs";
```

### Parámetros

| Parámetro     | Tipo                     | Requerido | Default                                                                                                                                  | Descripcion                                                                                       |
| ------------- | ------------------------ | --------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| nItems        | number                   | no        | 20                                                                                                                                       | Número de elementos flotantes en la lámpara de lava.                                              |
| styles        | CSSProperties            | no        | \{ width: "100%", height: "500px",background: "linear-gradient(45deg,var(--fenext-color-primary) 0%,var(--fenext-color-success) 100%)"\} | Estilos generales aplicados al contenedor de la lámpara de lava.                                  |
| stylesElement | LavaLampStylesElement[]  | no        |                                                                                                                                          | Estilos aplicados a los elementos individuales flotantes en la lámpara de lava.                   |
| ranges        | LavaLampRangeStylesProps | no        | \{\}                                                                                                                                     | Propiedades de rango aleatorio para determinar el movimiento, escala y posición de los elementos. |
| className     | string                   | no        | ''                                                                                                                                       | Clase CSS adicional para personalizar el contenedor del componente.                               |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/lavalamp-lavalamp--index)

### Usos

- Uso básico

```tsx copy
<LavaLamp />
```

- Con estilos personalizados

```tsx copy
<LavaLamp styles={{ width: "80%", height: "600px" }} />
```

- Con elementos personalizados

```tsx copy
<LavaLamp stylesElement={[{ width: "200px", background: "red" }]} />
```
