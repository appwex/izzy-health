import combatStyle from '../styles/Combat.module.scss'
import React from 'react'
import Button from './button'
const Combat = () => {
  return (
    <section id="combat-section">
      <div className={combatStyle.combatWrapper}>
        <div className={combatStyle.left}>
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
            <Button label="Get Started" btnType={'rounded'} />
          </div>
        </div>
        <div className={combatStyle.right}>
          <div className={combatStyle.grid}>
            <div className={combatStyle.card}>
              <p>Chronic Desease</p>
            </div>
            <div className={combatStyle.card}>
              <p>Heart diseases</p>
            </div>
            <div className={combatStyle.card}>
              <p>Pollution relataed sickness</p>
            </div>
            <div className={combatStyle.card}>
              <p>Global warming potential health risk</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Combat
