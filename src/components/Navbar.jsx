import Logo from '../assets/images/logo.png'


export default function Navbar() {
    return (
        <nav className='bg-white shadow-md px-4 py-3 md:px-8 fixed w-full z-50'>
            <div className='flex'>
                <div className="flex items-center space-x-4">
                    <img
                        src={Logo}
                        alt="Profile"
                        className="w-10 h-10 object-cover"
                    />
                </div>

                <div>
                    <span>
                        
                    </span>
                </div>

                <div>
                    <ul className='flex w-3/4 justify-betweenx text-xs'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Works</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}