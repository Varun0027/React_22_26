import { useState } from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const toggle = () => {
        setVisible(!visible)
    }
    const Login = (e) => {
        e.preventDefault();
        alert(data.username + data.password)
    }
    const handleCahnge = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }
    return (
        <div>
            <div class="navbar">
                <div class="navtitle">
                    Hello world
                </div>
                <ul class="navlinks">
                    <Link to='/'>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to='/about'>
                        <li>
                            About
                        </li>
                    </Link>
                    <Link to='/contact'>
                        <li>
                            Contact
                        </li>
                    </Link>
                    <li onClick={toggle}>
                        Login
                    </li>
                </ul>
            </div>
            {visible ? (
                <div className='card-wrapper'>
                    <div className="">
                        <h2 className="auth-title">Login</h2>
                        <form className="auth-container h-30v shadow" onSubmit={Login}>
                            <input type="text" name="" id="username" placeholder="Username" className="auth-input" onChange={handleCahnge} />
                            <input type="password" name="" id="password" placeholder="Password" className="auth-input" onChange={handleCahnge} />
                            <span className='btn-container'>
                                <input type="submit" value="Login" className="auth-btn w-50" />
                                <button className='cancel-btn w-50' onClick={toggle}>Cancel</button>
                            </span>
                        </form>
                    </div>
                </div>
            ) : ('')
            }
        </div>
    )
}

export default NavBar