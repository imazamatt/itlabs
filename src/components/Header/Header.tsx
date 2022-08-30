import Logo from '@/components/Logo/Logo'
import Navbar from '@/components/Navbar/Navbar'

function Header() {
  return (
    <header className={'header'}>
      <div className={'container'}>
        <div className={'header__content'}>
          <Logo />

          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header