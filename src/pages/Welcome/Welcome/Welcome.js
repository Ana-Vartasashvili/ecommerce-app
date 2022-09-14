import classes from './Welcome.module.css'
import heroImg from '../../../images/hero-image.jpg'
import { Link } from 'react-router-dom'
import TextScroll from './TextScroll'

const Welcome = () => {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.heroContent}>
          <div className={classes.text}>
            <h1 className={classes.heroTitle}>
              <span className={classes.titleWords}>Best solution</span> for
              small hunger.
            </h1>
            <p className={classes.heroSubtitle}>
              We'll never compromise on our high quality standards.
            </p>

            <div className={classes.btns}>
              <Link className={classes.shopBtn} to="/shop">
                Shop All Products
              </Link>
              <Link className={classes.aboutBtn} to="/about">
                Read About Us
              </Link>
            </div>
          </div>

          <div className={classes.heroImg}>
            <img src={heroImg} alt="corn flakes with different flavours" />
          </div>
        </div>
      </section>
      <TextScroll />
    </>
  )
}

export default Welcome
