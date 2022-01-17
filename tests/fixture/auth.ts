const failedLoginResponse = {
  $id: "1",
  code: 1,
  message: "invalid username or password",
  data: null,
};

const successLoginResponse = {
  $id: "1",
  code: 0,
  message: "success",
  data: {
    $id: "2",
    Id: 15214,
    Name: "Lucas",
    Email: "lucas.quinteiro@whiteprompt.com",
    Token: "5c5d0609-dab4-4ffc-a7c4-14d83dc1b5c2",
  },
};

export { failedLoginResponse, successLoginResponse };
