//import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch.js";

function DadJoke() {
  const { data } = useFetch(`https://icanhazdadjoke.com/`);
  // const [joke, setJoke] = useState("");
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("https://icanhazdadjoke.com/", {
  //     headers: { Accept: "application/json" },
  //   })
  //     .then((res) => res.json())
  //     .then(({ joke }) => setJoke(joke))
  //     .catch((err) => setError(err));
  // }, []);

  // if (error) {
  //   return <p>Error!</p>;
  // }

  return (
    <section>
      <h4>Dad Joke!</h4>
      <p>{data.joke}</p>
    </section>
  );
}

export default DadJoke;
