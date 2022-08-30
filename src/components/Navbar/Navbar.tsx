import Link from 'next/link'
import { useRouter } from 'next/router'

const navigations = [
  {
    id: 1,
    name: 'Courses',
    path: '/courses'
  },
  {
    id: 2,
    name: 'About Us',
    path: '/aboutus'
  },
  {
    id: 3,
    name: 'Free Lessons',
    path: '/freelessons'
  },
  {
    id: 4,
    name: 'Contacts',
    path: '/contacts'
  }
]

function Navbar() {
  const { pathname } = useRouter()

  return (
    <nav className={'navbar'}>
      <ul className={'navbar__list'}>
        {navigations.map(({id, name, path }) => (
          <li className={'navbar__item'} key={id}>
            <Link href={path} replace>
              <a className={`navbar__link ${pathname === path ? 'active' : ''}`}>{name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <div className={'navbar__divider'} />

      <div className={'calling'}>
        <ul className={'calling__list'}>
          <li className={'calling__item'}>
            <Link href={'tel:998981219808'}>
              <a className={'calling__link'}>Call</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
