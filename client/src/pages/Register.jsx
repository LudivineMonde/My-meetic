import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [genre, setGenre] = useState("man");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hobbies, setHobbies] = useState("nature");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Les mots de passe ne sont pas identiques.");
    }

    alert("submitted");

    const body = {
      email,
      password,
      name,
      surname,
      confirmPassword,
      genre,
      city,
      hobbies,
      birthdate
    };
    console.log(email, password);
    const configuration = {
      method: "post",
      url: "http://localhost:4000/users",
      data: body,
    };

    axios(configuration)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.response.data)
        console.log(error);
      });
  };

  return (
    <form
      className="space-y-6 w-full px-3 mb-6 md:mb-0"
      method="POST"
      onSubmit={handleSubmit}
    >
      <h3 className="text-white text-xl text-center p-6 bg-pink-400">
        Inscrivez-vous
      </h3>
      <div className="text-center place-content-center">
        <label className="block mb-2">Nom:</label>
        <input
          className="border-2 border-pink-400"
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <label className="block mb-2">Prénom:</label>
        <input
          className="border-2 border-pink-400"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="block mb-2">Date de naissance:</label>
        <input
          className="border-2 border-pink-400"
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <label className="block mb-2"> Genre:</label>
        <select
          className="border-2 border-pink-400"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="man">Homme</option>
          <option value="woman">Femme</option>
          <option value="other">Autres</option>
        </select>
        <label className="block mb-2">Ville:</label>
        <input
          className="border-2 border-pink-400"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
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
        <label className="block mb-2">Confirmez le mot de Passe</label>
        <input
          className="border-2 border-pink-400"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <label className="block mb-2"> Loisirs:</label>
        <select
          className="border-2 border-pink-400"
          value={hobbies}
          onChange={(e) => setHobbies(e.target.value)}
        >
          <option value="nature">Nature</option>
          <option value="art">Art</option>
          <option value="cuisine">Cuisine</option>
          <option value="danse">Danse</option>
          <option value="sport">Sports</option>
          <option value="jardinage">Jardinage</option>
          <option value="voyage">Voyage</option>
          <option value="musique">Musique</option>
          <option value="films">Films</option>
          <option value="photographie">Photographie</option>
          <option value="jeux_videos">Jeux Vidéos</option>
        </select>
        <button
          className="block mb-2 justify-center rounded-full px-3 bg-pink-400 text-white"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          S'inscrire
        </button>
        <span>Déjà inscrit ?</span>{" "}
        <Link className="underline text-pink-400" to="/Connexion">
          {" "}
          Connectez-vous
        </Link>
      </div>
    </form>
  );
};

export default Register;
