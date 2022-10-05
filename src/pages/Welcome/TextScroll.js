import classes from './TextScroll.module.css'

const TextScroll = () => {
  return (
    <div>
      <p className={classes.marquee}>
        <span>
          Welcome to the world of snacks! Welcome to the world of snacks!
          Welcome to the world of snacks! Welcome to the world of snacks!
          Welcome to the world of snacks!&nbsp;
        </span>
      </p>
      <p className={`${classes.marquee} ${classes.marquee2}`}>
        <span>
          Welcome to the world of snacks! Welcome to the world of snacks!
          Welcome to the world of snacks! Welcome to the world of snacks!
          Welcome to the world of snacks!&nbsp;
        </span>
      </p>
    </div>
  )
}

export default TextScroll
