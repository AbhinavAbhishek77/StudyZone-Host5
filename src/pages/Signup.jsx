import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Learn to code with StudyZone!"
      description1=""
      description2="Build skills for today and tomorrow."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
