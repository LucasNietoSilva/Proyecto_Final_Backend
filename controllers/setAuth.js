const {setAuth} = useContext(AuthContext);

const handleSubmit = async (e) => {
  e.preventDefault();
  try{
  const response = await login ({ email: user, password: password});
  const token = response?.data?.token;
  setAuth({ user, password, token});
  setUser("");
  setPassword("");
  setSucces(true);
  } catch (err) {
  if (!err?.response) {
  setErrMsg("No server response");
  } else if (err.response?.status === 400) {
  setErrMsg("Missing Username or Password");
  } else if (err.response?.status === 401) {
  setErrMsg("No autorizado");
  } else {
  setErrMsg("No se pudo iniciar sesión");
  }}};
