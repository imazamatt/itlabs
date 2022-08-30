import Link from 'next/link'
import Image from 'next/image'

import LogoSvg from '/public/logo.svg'

function Logo() {
  return (
    <div className={'logo'}>
      <Link href={'/'}>
        <a className={'logo__link'}>
          <Image className={'logo__img'} src={LogoSvg} width={150} height={35} alt={'IT Labs Logo'} />
        </a>
      </Link>
    </div>
  )
}

export default Logo