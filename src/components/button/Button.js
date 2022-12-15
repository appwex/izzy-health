import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Button.module.scss'

const Button = ({ label, onClick, variant, btnType, customClass }) => (
  <button
    onClick={onClick}
    className={clsx(stl.btn, stl[variant], stl[btnType], customClass)}
  >
    {label}
  </button>
)

Button.defaultProps = {
  label: 'Button',
  onClick: () => console.log('clicked!'),
  variant: 'primary',
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'error']),
  btnType: PropTypes.string,
  customClass: PropTypes.string,
}

export default Button
