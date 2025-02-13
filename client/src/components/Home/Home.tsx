import GameModeCard from "./GameModeCard";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <GameModeCard
        title="Versus Local"
        description="Pass and play with as many friends as you want"
        buttonText="Play"
        imageSrc="https://images.unsplash.com/photo-1557511113-84fb922d34d5?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Versus Local"
        route="/versus-local"
      />

      <GameModeCard
        title="Online Mode"
        description="Play with friends online"
        buttonText="Play"
        imageSrc="https://images.unsplash.com/photo-1615554851544-e6249b92a492?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGlzdGVuaW5nJTIwdG8lMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D"
        imageAlt="Online Mode"
        route="/online"
      />
    </div>
  );
};

export default Home;
