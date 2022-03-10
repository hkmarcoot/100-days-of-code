// export async function getServerSideProps() {
//   const response = await fetch(
//     `https://zoo-animal-api.herokuapp.com/animals/rand`
//   );
//   const data = await response.json();
//   console.log(data);
//   return { props: { data } };
// }
function Hello() {
  return (
    <>
      <p>hello</p>
    </>
  );
}

export default Hello;
