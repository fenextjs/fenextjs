# Menú

El componente Menu renderiza una lista de elementos interactivos. Se utiliza para mostrar una estructura de menú con soporte para la funcionalidad de colapsar submenús, íconos personalizados y distintos tipos de comportamiento (radio o checkbox).

### Importación

Para importar el componente Menú, se puede hacer desde fenextjs

```tsx copy
import { Menú } from "fenextjs";
```

### Parámetros

| Parámetro          | Tipo                  | Requerido | Default     | Descripcion                                                                              |
| ------------------ | --------------------- | --------- | ----------- | ---------------------------------------------------------------------------------------- |
| items              | ItemMenuProps[]       | no        | []          | Lista de elementos del menú. Cada uno debe cumplir con la interfaz `ItemMenuProps`.      |
| iconArrow          | ReactNode             | no        | \<Arrow /\> | Ícono que se muestra para los elementos colapsables del menú.                            |
| typeCollapse       | 'radio' \| 'checkbox' | no        | undefined   | Tipo de comportamiento para los elementos colapsables del menú, ya sea radio o checkbox. |
| className          | string                | no        | ''          | Clase CSS para personalizar el contenedor principal del menú.                            |
| defaultShowSubMenu | boolean               | no        | false       | Determina si los submenús deben mostrarse por defecto.                                   |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/header-menu--index)

### Usos

- Menú básico

```tsx copy
<Menu
  items={[
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
  ]}
/>
```

- Menú con ícono personalizado

```tsx copy
<Menu
  iconArrow={<CustomIcon />}
  items={[
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
  ]}
/>
```

- Menú con submenús desplegables

```tsx copy
<Menu
  defaultShowSubMenu={true}
  items={[
    { label: "Home", link: "/", defaultActive: true },
    { label: "Projects", link: "/projects" },
  ]}
/>
```
