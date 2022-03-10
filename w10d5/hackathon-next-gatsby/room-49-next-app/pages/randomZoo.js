import styles from '../styles/RandomZ.module.css'
export async function getServerSideProps() {
  const response = await fetch(
    `https://zoo-animal-api.herokuapp.com/animals/rand`
  );
  const data = await response.json();
  console.log(data);
  return { props: { data } };
}
function RandomZoo({ data }) {
  return (
    <>
      <button>
        <a href="http://localhost:3000/">[Go back to main page]</a>
      </button>
      <div className = {styles.grid}>
      <p >Name: {data.name}</p>
      <p>Habitat: {data.habitat}</p>
      <p>Diet: {data.diet}</p>
      <p>Geo_range: {data.geo_range}</p>
      <img src={data.image_link} width="300px"></img>
      </div>
      {/* <p>{JSON.stringify({ data })}</p> */}
    </>
  );
}

export default RandomZoo;
