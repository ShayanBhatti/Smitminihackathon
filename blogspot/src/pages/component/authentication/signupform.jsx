import Button from "../Button";
import { useState } from "react";
export default function SignupForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
  
 
    return (
    <div className="signup-form-container">
      <h3 className="header">Signup - Form</h3>
      <div className="signup-form-content">
        <label htmlFor="firstName">FirstName</label>
        <input
          placeholder="FirstName"
          type="text"
          name="FirstName"
          id="FirstName"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}

/>
        <br />
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          placeholder="lastName"
          required
          name="lastName"
          id="lastName"
        />
        <br /> <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@example.com"
          required
        />
        <br />
        <label htmlFor="Password">Password</label>
        <input type="password" name="password" id="password" required />
        <br /> <label htmlFor="repeatPassword">Repeat Password</label>
        <input type="password" />
        <br />
        <Button title="Sign-up" />
      </div>
    </div>
  );
}
import { useState } from "react";
export default function SignupForm() {
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Here you can process and use the form data
      const formData = {
        firstName,
        lastName,
        email,
        password,
        repeatPassword,
      };
  
      console.log(formData);
    };
  
    return (
      <div className="signup-form-container">
        <h3 className="header">Signup - Form</h3>
        <div className="signup-form-content">
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              required
            />
            {/* Other form fields... */}
            <Button title="Sign-up" type="submit" />
          </form>
        </div>
      </div>
    );
  }
  