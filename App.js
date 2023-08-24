function MyButton() {
  return <button>I'm a button</button>;
}

export default function MyApp() {
  return (
    <div>
      <h1>SOBRE MIM...</h1>
      <h2>Meu nome é Marco</h2>
      <h2>Tenho 16 anos</h2>
      <h2>Moro em Americana</h2>
      <h2>Trabalho na empresa DAE</h2>
      <h2>Estudo na Etec Polivalente </h2>
      <h2>
        No tempo livre gosto de jogar xadrez,ver filmes,series,animes,jogar
        basquete e jogos{" "}
      </h2>
      <MyButton />
    </div>
  );
}
