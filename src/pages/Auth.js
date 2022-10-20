import SignUpForm from "../components/SignUpForm";
import '../App.css';
import LogInForm from "../components/LogInForm";

export default function Auth (props) {
  return (
    <main className="auth-bg">
      <h1 className="titleFont">Welcome to the Meal Generator App!</h1>
      <h2>Sign Up!</h2>
      <SignUpForm setUser={props.setUser}/>
      <h2>Log In</h2>
      <LogInForm setUser={props.setUser} />
    </main>
  )
}