import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const [id, setId] = useState("");

  useEffect(() => {
    fetch(`${url}${id}`, {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err));
  }, [id, url]);

  if (error) {
    console.log(error);
    console.log(data);
    return <p>Error!</p>;
  }

  const handleChange = (e) => setId(e.target.value);

  return { id, data, handleChange };
};
