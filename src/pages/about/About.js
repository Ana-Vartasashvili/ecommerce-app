import imgBoy from '../../images/tyler-nix-ZPYMp9Q6Y1A-unsplash (1).jpg'
import imgProduct from '../../images/tyler-nix-OZp-QB8yhMY-unsplash (1) (1).jpg'
import classes from './About.module.css'

const About = () => {
  return (
    <div className={classes.container}>
      <img src={imgBoy} alt="Boy cycling and eating corn snacks"></img>

      <p className={classes.text}>
        Jeff, Jen and Teresa (Jeff's wife) launched the company in 2012 with
        their small savings and big dreams to use heirloom corn to reinvent
        their favorite childhood snacks that satisfy your cravings without
        making you feel like crap. Since launching our mini popcorn in
        hand-stamped paper bags at a Brooklyn farmers’ market, we've gotten a
        lot of help from family and friends, including new friends like Oprah
        and Barbara Corcoran from Shark Tank!
      </p>

      <p className={`${classes.text} ${classes.replaceItem} `}>
        Making the best tasting delicious mini heirloom popcorn was just the
        start as our heirloom corn varieties are as unique as the family farmers
        who have been growing them for generations. we knew we had to stay true
        to the value of the heirloom corn that started this family journey. That
        meant keeping our ingredients pure and simple—like non-GMO sunflower
        oil, organic cheese, orange color from paprika and no artificial
        anything. We’re so proud of what we’ve created and we hope you love them
        as much as we do!
      </p>

      <img src={imgProduct} alt="Boy cycling and eating corn snacks"></img>
    </div>
  )
}

export default About
