

export default function Navbar(){

  return(
    <div className="navbar bg-transparent text-normal fixed z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl scroll-smooth" href="#top">Night Owl</a>
      </div>
      <div className="flex justify-center bg-navbar">
        <ul className="menu menu-horizontal rounded-md">
          <li className="visible max-lg:hidden"><a href="#about" className="hover:text-navbar hover:bg-normal scroll-smooth">About Us</a></li>
          <li className="visible max-lg:hidden"><a href="#dopage" className="hover:text-navbar hover:bg-normal scroll-smooth">What We Do</a></li>
          <li className="hidden"><a href="/" className="hover:text-navbar hover:bg-normal scroll-smooth">Procedure</a></li>
          <li className="visible max-lg:hidden"><a href="#price" className="hover:text-navbar hover:bg-normal scroll-smooth">Pricing</a></li>
          <li className="visible lg:hidden hover:text-navbar hover:bg-normal rounded-md">
              <details>
                <summary>
                  Menu
                </summary>
                <ul className="p-2 bg-base-100">
                  <li ><a href="#about" className="hover:text-navbar hover:bg-normal">About Us</a></li>
                  <li ><a href="#dopage" className="hover:text-navbar hover:bg-normal">What We Do</a></li>
                  <li className="hidden"><a href="/" className="hover:text-navbar hover:bg-normal">Procedure</a></li>
                  <li ><a href="#price" className="hover:text-navbar hover:bg-normal">Pricing</a></li>
                </ul>
              </details>
          </li>
        </ul>

        

        <button className="btn btn-ghost hover:bg-normal hover:text-navbar"><a href="https://discord.gg/U9aH9GA8BV">Join Us!!</a> </button>
      </div>
    </div>
  )
}