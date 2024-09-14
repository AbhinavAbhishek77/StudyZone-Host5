import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1=""
      description2="Build skills for today and tomorrow."
      image={loginImg}
      formType="login"
      
    />
  )
}

export default Login
