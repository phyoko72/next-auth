import Link from 'next/link'

function Navbar() {

  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>NextAuth</a>
      </h1>
      <ul>
        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/dashboard'>
           Dashboard
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            Blog
          </Link>
        </li>

        
          <li>
            <Link href='/api/auth/signin'>
                Sign In
            </Link>
          </li>
        

          <li>
            <Link href='/api/auth/signout'>
                Sign Out
            </Link>
          </li>
        
      </ul>
    </nav>
  )
}

export default Navbar