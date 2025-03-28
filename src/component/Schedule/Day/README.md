# ScheduleDay

El componente ScheduleDay permite a los usuarios seleccionar un rango de fechas para un día específico y añade múltiples intervalos de tiempo si es necesario. Utiliza el componente InputDateRange para manejar los intervalos de fecha/hora.

### Importación

Para importar el componente ScheduleDay, se puede hacer desde fenextjs

```tsx copy
import { ScheduleDay } from "fenextjs";
```

### Parámetros

| Parámetro    | Tipo                               | Requerido | Default                                              | Descripcion                                                                                |
| ------------ | ---------------------------------- | --------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| className    | string                             | no        | ''                                                   | Clase CSS para personalizar el contenedor del componente ScheduleDay.                      |
| defaultValue | ScheduleDayValueType               | no        | [[undefined, undefined]]                             | Valor inicial del campo de entrada, representado como un array de rangos de fechas.        |
| value        | ScheduleDayValueType               | no        | undefined                                            | Valor actual del campo de entrada, usado para el control del componente desde el exterior. |
| onChange     | (v: ScheduleDayValueType) =\> void | no        | N/A                                                  | Función callback para manejar cambios en el valor del campo de entrada.                    |
| ButtonProps  | Omit\<ButtonProps, 'onClick'\>     | no        | \{ children: 'Add Time Range' \}                     | Props para personalizar el botón que añade nuevos intervalos de tiempo.                    |
| propsStart   | InputDateRangeBaseProps            | no        | \{ label: 'Start time', placeholder: 'Start time' \} | Props específicos para el campo de hora de inicio del rango de fecha.                      |
| propsEnd     | InputDateRangeBaseProps            | no        | \{ label: 'Final hour', placeholder: 'Final hour' \} | Props específicos para el campo de hora de fin del rango de fecha.                         |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/schedule-scheduleday--index)

### Usos

- Uso básico del ScheduleDay

```tsx copy
<ScheduleDay onChange={(value) => console.log(value)} />
```

- ScheduleDay con valor predeterminado

```tsx copy
<ScheduleDay defaultValue={[[new Date(2023, 0, 1), new Date(2023, 0, 2)]]} />
```

- ScheduleDay con botón personalizado

```tsx copy
<ScheduleDay
  ButtonProps={{
    children: "Añadir rango de tiempo",
    className: "mi-clase-boton",
  }}
/>
```
