import { Metadata } from "next";
import SignUp from "@/app/components/auth/sign-up";

export const metadata: Metadata = {
  title:
    "Sign Up | Globistix",
};

const SignupPage = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default SignupPage;
