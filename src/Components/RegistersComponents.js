import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background: #8C11BE;
`

const Header = styled.div`
  padding: 25px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2{
    font-family: "Raleway";
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    color: #fff;
  }

  img{
    width: 25px;
    height: 25px;
  }
`

const RegisterContainer = styled.div`
  height: 446px;
  width: 90%;

  margin: 0 auto 15px;
  border-radius: 5px;

  font-family: "Raleway";
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
  color: #868686;

  background: #fff;

  overflow-y: scroll;
`

const Buttons = styled.div`
  width: 90%;

  margin: 0 auto 10px;
  
  display: flex;
  justify-content: space-around;
  
`

const AddRegister = styled.button`
  height: 114px;
  width: 155px;
  
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;

  background: #A328D6;

  font-family: "Raleway";
  font-size: 17px;
  font-weight: 700;
  line-height: 20px;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img{
    width: 21px;
  }
`

export {
  Container,
  Header,
  RegisterContainer,
  Buttons,
  AddRegister,
}