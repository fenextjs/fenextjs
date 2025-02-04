# FenextImgUserPlaceholder

Imagen que se puede usar para mostrar un placeholder en caso de que la imagen del usuaro tenga un problema de carga.

### Importación

Para importar el componente FenextImgUserPlaceholder, se puede hacer desde fenextjs

```tsx copy
import { FenextImgUserPlaceholder } from "fenextjs";
```

![alt FenextImgUserPlaceholder](
https://fenextjs-img-placeholder.vercel.app/user.png
    )

### Usos

- Usar en la etiqueta img

```tsx copy
<img src={FenextImgUserPlaceholder} alt="" />
```

- Usar en la etiqueta Img de fenextjs

```tsx copy
import { Img } from "fenextjs";
<Img src={"...url"} alt="" imgIf404={FenextImgUserPlaceholder} />
```

