# PaginationItemPage

Componente de paginación que permite navegar entre páginas de una lista de elementos, con opciones de personalización para los iconos y las clases CSS.

### Importación

Para importar el componente PaginationItemPage, se puede hacer desde fenextjs

```tsx copy
import { PaginationItemPage } from "fenextjs";
```

### Parámetros

| Parámetro                                  | Tipo                    | Requerido | Default                                                                                                        | Descripcion                                                                                   |
| ------------------------------------------ | ----------------------- | --------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| classNameContent                           | string                  | no        | ''                                                                                                             | Clase CSS para el contenedor principal de la paginación.                                      |
| classNameUp                                | string                  | no        | ''                                                                                                             | Clase CSS para el botón 'Go Up'.                                                              |
| classNamePre                               | string                  | no        | ''                                                                                                             | Clase CSS para el botón de página anterior.                                                   |
| classNameCurrent                           | string                  | no        | ''                                                                                                             | Clase CSS para el número de la página actual.                                                 |
| classNameCurrentItem                       | string                  | no        | ''                                                                                                             | Clase CSS para el elemento de la página actual.                                               |
| classNameNext                              | string                  | no        | ''                                                                                                             | Clase CSS para el botón de la página siguiente.                                               |
| classNameDown                              | string                  | no        | ''                                                                                                             | Clase CSS para el botón 'Go Down'.                                                            |
| icons                                      | object                  | no        | \{ up: \<PaginationUp /\>, pre: \<PaginationPre /\>, next: \<PaginationNext /\>, down: \<PaginationDown /\> \} | Objetos de iconos personalizados para cada botón de la paginación.                            |
| nItems                                     | number                  | sí        |                                                                                                                | Número total de elementos a paginar.                                                          |
| disabled                                   | boolean                 | no        | false                                                                                                          | Deshabilita la navegación del componente si se establece en true.                             |
| paginationName                             | string                  | no        | undefined                                                                                                      | Nombre unico para el uso de usePagination.                                                    |
| hiddenIfNItemsSmallerThanOrEqualNItemsPage | boolean                 | no        | true                                                                                                           | Oculta la paginación si el número de elementos es menor o igual que los elementos por página. |
| onChange                                   | (page: number) =\> void | no        |                                                                                                                | Función de callback que se llama cuando cambia la página.                                     |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/pagination-paginationitempage--index)

### Usos

- Paginación básica con 50 elementos y 10 elementos por página

```tsx copy
<PaginationItemPage nItems={50} />
```

- Paginación con estilos personalizados y deshabilitada

```tsx copy
<PaginationItemPage nItems={50} classNameContent="custom-class" disabled />
```

- Paginación con callback en cambio de página

```tsx copy
<PaginationItemPage
  nItems={50}
  onChange={(page) => console.log("Página actual:", page)}
/>
```
