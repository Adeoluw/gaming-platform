import React from "react";
import Games from "./Games";

export default function Trending() {
    const [gameList, setGameList] = React.useState([]);
    const [seeAll, setSeeAll] = React.useState(false)



    function toggleAllGames() {
        setSeeAll(prevstate => !prevstate)
    }

  React.useEffect(() => {
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "5f8bed97cfmsh4c0ad31e8436337p1cfe54jsn672c235e59b6",
      },
    })
      .then((response) => response.json())
      .then((data) => setGameList(data))
      // .then((data) => setGameList((prevstate) => [...prevstate, data]))
      .catch((error) => console.log("Error:", error));
  }, [1]);

  console.log(gameList);

  const currentGames = (seeAll ? gameList.slice(0, 21) : gameList.slice(0, 3)).map((item) => {
    return (
      <Games
        key={item.id}        // Use item's id as the key
        name={item.title}    // Pass title to the Games component
        img={item.thumbnail} // Pass thumbnail URL
        link={item.game_url} // Pass the game URL
      />
    );
  });
  
  return (
    <>
      <div className="trending-games">
        <div className="trending-head">
          <h2>Currently Trending Games</h2>
          <button onClick={toggleAllGames}>SEE ALL</button>
        </div>
        <div className="allgames">{currentGames}</div>
      </div>
    </>
  );
}
