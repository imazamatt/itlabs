import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Main from '@/components/Main/Main'

function Layout({ children }: any) {
  return (
    <div className={'layout'}>
      <Header />
      <Main children={children} />
      <Footer />
    </div>
  )
}

export default Layout