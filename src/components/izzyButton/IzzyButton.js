import clsx from 'clsx'
import stl from './IzzyButton.module.scss'

import PropTypes from 'prop-types'

export const BUTTON_TYPE = {
  btnPrimary: 'btnPrimary',
  btnSecondary: 'btnSecondary',
  btnRounded: 'btnRounded',
}

const IzzyButton = ({
  label,
  variant,
  btnType,
  customClass,
  width,
  ...otherProps
}) => {
  const customWidth = {
    width: `${width}px`,
  }

  return (
    <button
      className={clsx(stl.btn, stl[variant], stl[btnType], customClass)}
      {...otherProps}
      style={customWidth}
    >
      {label}
    </button>
  )
}

IzzyButton.defaultProps = {
  label: 'button',
  variant: BUTTON_TYPE.btnPrimary,
  width: 220,
}

IzzyButton.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(['btnPrimary', 'btnSecondary']),
  btnType: PropTypes.string,
  customClass: PropTypes.string,
  width: PropTypes.number,
  otherProps: PropTypes.object,
}

export default IzzyButton
