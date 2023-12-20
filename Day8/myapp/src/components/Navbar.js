import { useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const toggle = () => {
        setVisible(!visible)
    }
    // const [data, setData] = useState({
    //     username: '',
    //     password: ''
    // })
    const usernameInputRef = useRef(null)
    const passwordInputRef = useRef(null)

    const Login = (e) => {
        e.preventDefault();

        const formData = {
            username: usernameInputRef.current.value,
            password: passwordInputRef.current.value
        }
        // console.log(formData)
        // usernameInputRef.current.value = ''
        // passwordInputRef.current.value = ''

        // usernameInputRef.current.focus()
        toast.success('Login Successfull!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }
    // const handleCahnge = (e) => {
    //     setData({ ...data, [e.target.id]: e.target.value })
    // }
    return (
        <>
            <div>
                <div className="navbar">
                    <div className="navtitle">
                        Hello world
                    </div>
                    <ul className="navlinks">

                        <li>
                            Home
                        </li>

                        <li>
                            About
                        </li>
                        <li>
                            Contact
                        </li>
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
                                <input type="text" name="" id="username" placeholder="Username" className="auth-input" ref={usernameInputRef} required />
                                <input type="password" name="" id="password" placeholder="Password" className="auth-input" ref={passwordInputRef} required />
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
            <ToastContainer/>
        </>
    )
}

export default NavBar