import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main className={'main'}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout