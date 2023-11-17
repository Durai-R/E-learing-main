import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputComponent from "../../components/InputComponent/InputComp";
import "./LoginContainer.css";

const LoginContainer = () => {
  return (
    <div className="flex loginCont">
        <div className="logInLeft">
            <img src='https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>
        <div className="logInRight">
            <h2>Login Page</h2>
            <div className="InputCont">
                <InputComponent/>
            </div>
            <div className="InputCont">
                <InputComponent/>
            </div>
            <p>Forgot password?</p>
            <ButtonComponent/>
            {/* <p className="orCntnt">Or</p> */}
        </div>
    </div>
  )
}

export default LoginContainer;