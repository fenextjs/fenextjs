# InputSelectCountry

El componente InputSelectCountry permite seleccionar un país de una lista de países, con la posibilidad de personalizar las clases CSS.

### Importación

Para importar el componente InputSelectCountry, se puede hacer desde fenextjs

```tsx copy
import { InputSelectCountry } from "fenextjs";
```

### Parámetros

| Parámetro | Tipo                              | Requerido | Default | Descripcion                                                                                                |
| --------- | --------------------------------- | --------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| ...props  | InputSelectTProps\<CountryProps\> | no        |         | Propiedades adicionales que extienden de InputSelectTProps, como eventos o configuraciones del componente. |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/input-inputselectcountry--index)

### Usos

- Básico

```tsx copy
<InputSelectCountry />
```

- InputSelectCountry con opciones personalizadas

```tsx copy
<InputSelectCountry
  classNameSelect="custom-select"
  classNameList="custom-list"
/>
```

- InputSelectCountry con estilos CSS personalizados

```tsx copy
<InputSelectCountry classNameSelect="custom-select-class" />
```
