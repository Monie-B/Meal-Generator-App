import SignUpForm from "../components/SignUpForm";
import '../App.css';

export default function Auth (props) {
  return (
    <main className="auth-bg">
      <h1>Welcome to the Meal Generator App!</h1>
      <h2>Sign Up!</h2>
      <SignUpForm setUser={props.setUser}/>
      <button>Login</button>
    </main>
  )
}