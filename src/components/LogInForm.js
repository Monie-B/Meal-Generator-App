import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from '../utilities/users-service';

export default function LogInForm (props) {
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const navi = useNavigate();

  const [errorState, setErrorState] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const payload = {
        email: formData.email,
        password: formData.password,
      }

      const user = await logIn(payload);
      props.setUser(user);

    } catch {
      setErrorState('Log In Failed - Try Again');
    }
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button onClick={ () => navi('/home')} type="submit">Log In</button>
        </form>
        <p className="error-message">{errorState}</p>
      </div>
    </>
  )
}