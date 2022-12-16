import Stories from 'components/stories'
import IzzyButton from 'components/izzyButton/'
import { BUTTON_TYPE } from 'components/izzyButton/izzyButton'

const primary = {
  arg: 'Primary',
  label: 'Primary',
  variant: BUTTON_TYPE.btnPrimary,
}
const secondary = {
  arg: 'Secondary',
  label: 'Secondary',
  variant: BUTTON_TYPE.btnSecondary,
}
const rounded = {
  arg: 'Rounded',
  label: 'Rounded',
  btnType: BUTTON_TYPE.btnRounded,
}
const roundedSecondary = {
  arg: 'RoundedSecondary',
  label: 'Rounded Secondary',
  variant: BUTTON_TYPE.btnSecondary,
  btnType: BUTTON_TYPE.btnRounded,
}

const IzzyButtonStory = () => (
  <Stories
    argList={[primary, secondary, rounded, roundedSecondary]}
    template={args => <IzzyButton {...args} />}
  />
)

export default IzzyButtonStory
