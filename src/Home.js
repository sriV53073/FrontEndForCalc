import React from 'react'
import styled from 'styled-components'
const Title = styled.h1`
  position: absolute;
  top: 20%;
  left: 30%;
  @media (max-width: 793px) {
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    left: 20%;
  }
  
  `
   const MyForm = styled.form`
   position: absolute;
   top: 40%;
   left: 37%;
   @media (max-width: 1000px) {
     left: 25%;
   }
   `
const Home = (props) => {
    var val;
    function handleChange(e) {
        props.setUser1(e.target.value);
        props.setUser3(e.target.value);
        val = e.target.value;
        localStorage.setItem('user5', JSON.stringify(e.target.value));
      }
    
    function handleSubmit(e) {
      //localStorage.setItem('user5', JSON.stringify(e.target.value));
        window.location.assign('/calculator');
        e.preventDefault();
      }
    return (
    <div>
  <Title>Hey Please Enter Your Name and Log In</Title>
  <MyForm onSubmit={handleSubmit}>
        <label>
          What is your name:&nbsp;
        <input type="text" value={props.user1} onChange={handleChange} />
        </label> &nbsp;
        <input type="submit" value="Login" />
      </MyForm>
    </div>
    )
}

export default Home;