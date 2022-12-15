import Stories from 'components/stories'
import Button from 'components/button'

const primary = { arg: 'Primary', label: 'Primary', variant: 'primary' }
const secondary = { arg: 'Secondary', label: 'Secondary', variant: 'secondary' }
const error = { arg: 'Error', label: 'Error', variant: 'error' }
const rounded = { arg: 'Rounded', label: 'Rounded', btnType: 'rounded' }

const ButtonStory = () => (
  <Stories
    argList={[primary, secondary, error, rounded]}
    template={args => <Button {...args} />}
  />
)

export default ButtonStory
