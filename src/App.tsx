import React from "react";

interface TitleProps {
  text: string;
}

function Title(props: TitleProps) {
  return <h1>{props.text}</h1>;
}

function App() {
  return (
    <div className="App">
      <Title text="Tudo mais ou menos" />
      <Title text="Tudo quase pronto" />
      <Title text="Tudo indo ficar pronto" />
      <Title text="Tudo começando" />
    </div>
  );
}

export default App;
