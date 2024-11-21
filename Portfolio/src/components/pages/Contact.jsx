import { useState } from 'react';

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'firstName' ? setFirstName(value) : name === 'lastName' ? setLastName(value) : setEmail(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Thank you ${firstName} ${lastName} for reaching out! Talk soon`);
    setFirstName('');
    setLastName('');
  };
// export default function Contact() {
//   const mystyle = {
//     padding: "20px",
//     fontSize:"50px",
//     margin: "50px"
//   }
//   const mystyle2 = {
//     padding: "20px",
//     fontSize:"20px",
//     margin: "50px",
//   }
  //   return (
  //     <div>
  //       <h1 style ={mystyle}>Contact Page</h1>
  //       <p style={mystyle2}>
  //       </p>
  //     </div>
  //   );
  // }

  const form = {
    margin: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '150px',
    // marginBottom: '50px',
    width: '100%',
  }

  const input = {
    width: '300px', 
    height: '40px', 
    fontSize: '16px', 
    marginBottom: '20px', // Add spacing between inputs
  };

const button = {
  width: '150px', 
  height: '40px',
  fontSize: '16px',
}

const style ={
  padding: "20px",
  fontSize:"50px",
  margin: "50px"
}
  
  return (
    <div >
      <h1 style = {style}>
      CONTACT
      </h1>
      <form style = {form} onSubmit={handleFormSubmit}>
        <input
        style = {input} //stylinf for input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
         style = {input} // styling for input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
         <input
         style = {input} // styling for input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <button style = {button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
