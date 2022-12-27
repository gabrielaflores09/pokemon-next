// import axios from "axios";

// const pokeApi = axios.create({
//   baseURL: "https://pokeapi.co/api/v2",
// });

const pokeApi = async (url = "/", method = "GET") =>
  await fetch(`https://pokeapi.co/api/v2${url}`, {
    method,
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));

export default pokeApi;
