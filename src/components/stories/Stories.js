import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Stories.module.scss'

const Stories = ({ name = 'Story', argList, template, customClass }) => {
  const [arg, setArg] = useState(argList[0]?.arg || '')
  const args = argList.find(el => el.arg === arg)

  useEffect(() => {
    document.title = `${name} ${argList.length > 1 ? `| ${arg}` : ''}`
  }, [arg])

  return (
    <div className={clsx(stl.container, stl[themeClass], customClass)}>
      <select
        name="variants"
        onChange={e => setArg(e.target.value)}
        className={clsx(stl.variantSelector)}
      >
        {argList.map(el => (
          <option key={el.arg} value={el.arg}>
            {el.arg}
          </option>
        ))}
      </select>

      <div className={stl.content}>{template(args)}</div>
    </div>
  )
}

Stories.propTypes = {
  name: PropTypes.string,
  argList: PropTypes.array.isRequired,
  template: PropTypes.func.isRequired,
  customClass: PropTypes.string,
}

export default Stories
