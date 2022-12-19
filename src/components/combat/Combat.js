import stl from './Combat.module.scss'
import React from 'react'
import IzzyButton from 'components/izzyButton/'
import { BUTTON_TYPE } from 'components/izzyButton/IzzyButton'

const Combat = () => {
  const cardTexts = [
    'Chronic Desease',
    'Heart diseases',
    'Pollution relataed sickness',
    'Global warming potential health risk',
  ]

  return (
    <section id="combat-section">
      <div className={stl.wrapper}>
        <div className={stl.left}>
          <div>
            <h2>What we have to combat in today’s world</h2>
          </div>
          <div>
            <p>
              We help you manage and protect you today and tomorrow.Protecting
              yourself and family is key. We inspire to bring the lowest cost in
              medical care. The next phase is low cost medicine for all our
              subscribers.
            </p>
          </div>
          <div>
            <IzzyButton
              label="Get Started"
              variant={BUTTON_TYPE.btnPrimary}
              btnType={BUTTON_TYPE.btnRounded}
            />
          </div>
        </div>
        <div className={stl.right}>
          <div className={stl.grid}>
            {cardTexts.map(text => {            
                return( 
                  <div>
                      <p>{text}</p>
                   </div>
                )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Combat
