function App() {
  let name = "Vidhi";
  let age = 22;
  return (
   <>
      <Navbar/>
      {/* <h1>Hello {name}!</h1>
      <p>I am {age} years old</p>
      <p>Next year I will be {age+1}</p>
      <p>I am learning React.</p>
      <p>{age>=18?"Adult":"Minor"}</p> */}
      <Profile 
      name="Vidhi" 
      age = {22}
      city = "noida"/>
      <Profile 
      name="john" 
      age = {22}
      city = "mumbai"/>
  </>
  );
}

export default App;
import Navbar  from "./Navbar";
import Profile from "./Profile";