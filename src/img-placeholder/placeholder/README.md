# FenextImgPlaceholder

Imagen que se puede usar para mostrar un placeholder en caso de que la imagen original tenga un problema de carga.

### Importación

Para importar el componente FenextImgPlaceholder, se puede hacer desde fenextjs

```tsx copy
import { FenextImgPlaceholder } from "fenextjs";
```

![alt FenextImgPlaceholder](
https://fenextjs-img-placeholder.vercel.app/placeholder.png
    )

### Usos

- Usar en la etiqueta img

```tsx copy
<img src={FenextImgPlaceholder} alt="" />
```

- Usar en la etiqueta Img de fenextjs

```tsx copy
import { Img } from "fenextjs";
<Img src={"...url"} alt="" imgIf404={FenextImgPlaceholder} />
```

