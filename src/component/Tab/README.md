# Tab

El componente Tab permite la creación de pestañas con contenidos asociados, personalizables en clases CSS y comportamiento.

### Importación

Para importar el componente Tab, se puede hacer desde fenextjs

```tsx copy
import { Tab } from "fenextjs";
```

### Parámetros

| Parámetro                  | Tipo                          | Requerido | Default   | Descripcion                                                                     |
| -------------------------- | ----------------------------- | --------- | --------- | ------------------------------------------------------------------------------- |
| className                  | string                        | no        | ""        | Clase CSS para el contenedor del componente.                                    |
| classNameContentHead       | string                        | no        | ""        | Clase CSS para el contenedor del encabezado del contenido de las pestañas.      |
| classNameHead              | string                        | no        | ""        | Clase CSS para el encabezado de la pestaña.                                     |
| classNameHeadItem          | string                        | no        | ""        | Clase CSS para cada elemento del encabezado de la pestaña.                      |
| classNameHeadItemActive    | string                        | no        | ""        | Clase CSS para el elemento activo del encabezado de la pestaña.                 |
| classNameBody              | string                        | no        | ""        | Clase CSS para el contenedor del cuerpo de las pestañas.                        |
| classNameBodyItem          | string                        | no        | ""        | Clase CSS para cada elemento del cuerpo de la pestaña.                          |
| items                      | TabItemProps[]                | no        | []        | Lista de objetos que representan las pestañas con encabezado y cuerpo.          |
| defaultTab                 | number                        | no        | 0         | Índice de la pestaña a mostrar por defecto.                                     |
| activeTab                  | number                        | no        | undefined | Índice de la pestaña actualmente activa.                                        |
| onChange                   | (item: TabItemProps) =\> void | no        | undefined | Función a ejecutar al cambiar de pestaña.                                       |
| tabScrollActive            | boolean                       | no        | false     | Determina si las pestañas deben estar en modo de desplazamiento al seleccionar. |
| validataTabOneHiddenHeader | boolean                       | no        | true      | Oculta el encabezado de las pestañas si solo hay una pestaña presente.          |
| useCount                   | boolean                       | no        | false     | Permite mostrar un contador de elementos en el encabezado de la pestaña.        |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/component-tab--index)

### Usos

- Ejemplo básico

```tsx copy
<Tab
  items={[
    { id: "tab1", head: "Tab 1", body: "Contenido 1" },
    { id: "tab2", head: "Tab 2", body: "Contenido 2" },
  ]}
/>
```

- Con clase personalizada y función de cambio

```tsx copy
<Tab
  className="custom-tab"
  onChange={(item) => console.log("Pestaña seleccionada:", item)}
/>
```

- Con contador de elementos en el encabezado

```tsx copy
<Tab
  items={[
    {
      id: "tab1",
      head: "Tab 1",
      body: "Contenido 1",
      useCount: true,
      count: 3,
      singular: "elemento",
      plural: "elementos",
    },
  ]}
  useCount={true}
/>
```
