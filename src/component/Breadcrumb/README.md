# Breadcrumb

El componente Breadcrumb muestra una serie de enlaces que indican la ruta de navegación actual del usuario. Es útil para mejorar la experiencia del usuario al mostrarle el contexto de navegación.

### Importación

Para importar el componente Breadcrumb, se puede hacer desde fenextjs

```tsx copy
import { Breadcrumb } from "fenextjs";
```

### Parámetros

| Parámetro     | Tipo                  | Requerido | Default | Descripcion                                                                                                                                                |
| ------------- | --------------------- | --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| links         | BreadcrumbLinkProps[] | sí        |         | Una lista de objetos que representan los enlaces del breadcrumb. Cada objeto incluye la URL, el contenido y opcionalmente un manejador de eventos onClick. |
| className     | string                | no        | ""      | Clase personalizada para el componente Breadcrumb.                                                                                                         |
| classNameItem | string                | no        | ""      | Clase personalizada para los elementos individuales del breadcrumb.                                                                                        |
| classNameLink | string                | no        | ""      | Clase personalizada para los enlaces dentro del breadcrumb.                                                                                                |

### Propiedades de BreadcrumbLink

Cada enlace en el breadcrumb se define mediante las siguientes propiedades:

| Propiedad | Tipo      | Descripción                                                            |
| --------- | --------- | ---------------------------------------------------------------------- |
| href      | string    | La URL a la que se redirigirá cuando se haga click en el enlace.       |
| children  | ReactNode | El contenido que se mostrará dentro del enlace.                        |
| onClick   | function  | Función que se ejecutará cuando se haga click en el enlace (opcional). |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/breadcrumb-breadcrumb--index)

### Usos

- Breadcrumb básico

```tsx copy
<Breadcrumb
  links={[
    { href: "/home", children: "Home" },
    { href: "/about", children: "About" },
  ]}
/>
```

- Breadcrumb con clases personalizadas

```tsx copy
<Breadcrumb
  className="custom-breadcrumb"
  classNameItem="custom-item"
  classNameLink="custom-link"
  links={[
    { href: "/home", children: "Home" },
    { href: "/services", children: "Services" },
    { href: "/contact", children: "Contact" },
  ]}
/>
```
