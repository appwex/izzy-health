# How to Use

eg: 
```js
import IzzyButton from 'components/izzyButton/'
import { BUTTON_TYPE } from 'components/izzyButton/izzyButton'

<IzzyButton label="Get Started" variant={BUTTON_TYPE.btnPrimary} btnType={BUTTON_TYPE.btnRounded} />
```

## Preset (Optional)

- BUTTON_TYPE is the preset of the variant and btnType where the value is the SCSS className of the preset.
- This is used in case forgot the className of the preset
```js
const BUTTON_TYPE = {
  btnPrimary: 'btnPrimary',
  btnSecondary: 'btnSecondary',
  btnRounded: 'btnRounded',
}
```

### Props 

- label -> Name of the button - default to "button"
- variant -> Colour preset of the button, default to "primary"
- btnType(optional) -> button type preset
- customClass(optional) -> Custom className for own modification
- width(optional) -> For different width button, default to 220px
- ...otherProps -> Take in button HTML Attributes such as onClick , disabled, type, etc

