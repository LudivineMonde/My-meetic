import { useState } from "react";
import axios from "axios"


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email,
      password
    };

    const configuration = {
      method: "post",
      url: "http://localhost:4000/users/connexion",
      data: body,
    };

    axios(configuration)
    .then((result) => {
      console.log(result);
    })
  };


  return (
    <form
      className="space-y-6 w-full px-3 mb-6 md:mb-0"
      method="POST"
      onSubmit={handleSubmit}
    >
      <h3 className="text-white text-xl text-center p-6 bg-pink-400"> Connexion </h3>
<div className="text-center place-content-center">
      <label className="block mb-2">E-mail</label>
      <input
      className="border-2 border-pink-400"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="block mb-2">Mot de Passe</label>
      <input
      className="border-2 border-pink-400"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="block mb-2 justify-center rounded-full px-3 bg-pink-400 text-white"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Connexion
      </button>
      </div>
    </form>
  );
};

export default Login;
