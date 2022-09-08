import classes from './Welcome.module.css'
import heroImg from '../../images/hero-image.jpg'

const Welcome = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.text}>
        <h1 className={classes.heroTitle}>
          <span className={classes.titleWords}>Best solution</span> for small
          hunger.
        </h1>
        <p className={classes.heroSubtitle}>
          We'll never compromise on our high quality standards.
        </p>
      </div>
      <div className={classes.heroImg}>
        <img src={heroImg} alt="corn flakes with different flavours" />
      </div>
    </section>
  )
}

export default Welcome
