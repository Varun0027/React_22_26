import './Assets/Css/Style.css'
import Nav from './Components/Nav'
function App(){
    return(
     <div>
    <Nav/>    
    <h2 className="auth-title">Login</h2>
    <form className="auth-container h-30v shadow">
        <input type="text" name="" id="username" placeholder="Username" className="auth-input" />
        <input type="password" name="" id="pwd" placeholder="Password" className="auth-input" />
        <input type="submit" value="Login" className="auth-btn" />
    </form>
     </div>

    )
}
export default App