import MainHeader from '../components/layout/MainHeader'

const Header = (props) => {
  return (
    <>
      <MainHeader />
      <main>props.children</main>
    </>
  )
}

export default Header
