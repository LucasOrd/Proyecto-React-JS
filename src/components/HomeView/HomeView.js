const HomeView = ({ saludo, texto }) => {
  return (
    <div>
      <h2>{saludo}</h2>
      <p>{texto}</p>
    </div>
  );
};

export default HomeView;
