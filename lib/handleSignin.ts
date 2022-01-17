interface SuccessLoginResponse {
  Name: string;
  Email: string;
  Token: string;
}

const handleSignin = ({ Name, Email, Token }: SuccessLoginResponse) => {
  localStorage.setItem("token", Token);
  localStorage.setItem("user", JSON.stringify({ Name, Email }));
};

export default handleSignin;
