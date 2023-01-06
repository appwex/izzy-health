import clsx from 'clsx'
import stl from './cta.module.scss' // stylesheet
import IzzyButton from 'components/izzyButton/'
import { BUTTON_TYPE } from 'components/izzyButton/IzzyButton'
import { Video, Voice, Prescription, Star, DoctorChat } from 'assets/svg'

const Cta = () => {
  return (
    <section id="cta-section">
      <div className={clsx(stl.container)}>
        <Star className={stl.star} />
        <div className={clsx(stl.wrapper)}>
          <div className={clsx(stl.header)}>
            <h1>Personalized health for you and your family from anywhere</h1>
            <form method="post" className={stl.emailForm}>
              <input
                type="email"
                placeholder="Your email address"
                className={stl.emailInput}
                name="email"
              />

              <IzzyButton
                label="Subscribe"
                variant={BUTTON_TYPE.btnPrimary}
                btnType={BUTTON_TYPE.btnRounded}
                width={145}
              />
            </form>
          </div>

          <div className={clsx(stl.icons)}>
            <a href="#" className={stl.icon}>
              <Video />
              <p>Video Message</p>
            </a>
            <a href="#" className={stl.icon}>
              <Voice />
              <p>Voice Note</p>
            </a>
            <a href="#" className={stl.icon}>
              <Prescription />
              <p>Prescription Message</p>
            </a>
            <DoctorChat className={stl.chatImg} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
