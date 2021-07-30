import profilePic from '../../public/icon.png'
import Link from 'next/link'

const SideMenu = ({}) => {
  const image = profilePic
  return (
    <>
      <aside className='menu'>
        <div className='container'>
          <h2 className='is-size-4 is-family-sans-serif subtitle'>Menu</h2>
        </div>
        <p className='menu-label'>Biography</p>
        <ul className='menu-list'>
          <li>
            <Link href='/'>
              <a>home</a>
            </Link>
          </li>
        </ul>
        <p className='menu-label'>Tools</p>
        <ul className='menu-list'>
          <li>
            <Link href='/tool/diff'>
              <a>Compare text diff</a>
            </Link>
          </li>
        </ul>
        <p className='menu-label'>Blog</p>
        <p className='menu-label'>GitHub</p>
        <ul className='menu-list'>
          <li>
            <Link href='https://github.com/kaseiaoki/meow'>
              <a>meow</a>
            </Link>
          </li>
          <li>
            <Link href='https://github.com/kaseiaoki/ice_t'>
              <a>ice_t</a>
            </Link>
          </li>
          <li>
            <Link href='https://github.com/kaseiaoki/ice_t'>
              <a>kaseiaoki.github.io</a>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default SideMenu
