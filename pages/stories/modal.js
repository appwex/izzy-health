import { useState } from 'react'

import Stories from 'components/stories'
import Modal from 'components/modal'
import Button from 'components/button'

import stl from './Stories.module.scss'

const defaultArgs = { arg: 'Default' }
const unBlur = { arg: 'Un Blur', blur: false }
const dontCloseOnClickAway = {
  arg: 'DontCloseOnClickAway',
  closeOnClickAway: false,
}

const Template = args => {
  const [modalOpen, setModalOpen] = useState(false)

  const closeModal = () => setModalOpen(false)

  return (
    <>
      <Button label="Open" onClick={() => setModalOpen(true)} />
      <Modal isOpen={modalOpen} close={closeModal} {...args}>
        <div className={stl.modal}>
          <h3>Example Modal</h3>
          <Button label="Close" onClick={closeModal} variant="error" />
        </div>
      </Modal>
    </>
  )
}

const ModalStory = () => (
  <Stories
    argList={[defaultArgs, unBlur, dontCloseOnClickAway]}
    template={args => <Template {...args} />}
  />
)

export default ModalStory
