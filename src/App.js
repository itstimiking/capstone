import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom'
import WithAuth from './HOC/Authentication';

function Home() {
  return (
    <div className="App">
      Home page
    </div>
  );
}

function Dashboard(props) {
  const [auth,setAuth] = props.auth

  if(!auth){
    return (
      <div className="App">
        You are not logged in
      </div>
    )
  }
  return (
    <>
      <div className="App">
        Hidden Dashboard secure
      </div>
      
    </>
  );
}

const AuthButton = (props)=>{
  const [auth,setAuth] = props.auth
  return (
  <button onClick={()=>setAuth(!auth)}>
    {!auth ? 'Login to Proceed' : 'Logout'}
  </button>
)}

const AuthDashboard = WithAuth(Dashboard)
const LoginButton = WithAuth(AuthButton)

function About() {
  return (
    <div className="App">
      About page not secure
    </div>
  );
}

function App() {
  return (
    <>
      <nav style={{justifyContent:'center',display:'flex',gap:'10px',padding:'50px 0px'}}>
        <Link to='/' >Home</Link>
        <Link to='/dashboard' >Dashboard</Link>
        <Link to='/about' >About</Link>

        <LoginButton />
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dashboard' element={<AuthDashboard />}  />
        <Route path='about' element={<About />}  />
      </Routes>
    </>
  );
}
export default App;
