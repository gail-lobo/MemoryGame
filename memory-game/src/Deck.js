import React, { useEffect, useState } from "react";
import Card from "./Card.js";
import "./Deck.css";

const Deck = () => {
  // State for managing the deck of cards
  const [deck, setDeck] = useState(
    [
      { id: 0, img: "/images/lion.jpg", name: "lion", status: "", animate: "" },
      { id: 0, img: "/images/lion.jpg", name: "lion", status: "", animate: "" },
      {
        id: 1,
        img: "/images/penguin.jpg",
        name: "penguin",
        status: "",
        animate: "",
      },
      {
        id: 1,
        img: "/images/penguin.jpg",
        name: "penguin",
        status: "",
        animate: "",
      },
      {
        id: 2,
        img: "/images/monkey.jpg",
        name: "monkey",
        status: "",
        animate: "",
      },
      {
        id: 2,
        img: "/images/monkey.jpg",
        name: "monkey",
        status: "",
        animate: "",
      },
      {
        id: 3,
        img: "/images/shark.jpg",
        name: "shark",
        status: "",
        animate: "",
      },
      {
        id: 3,
        img: "/images/shark.jpg",
        name: "shark",
        status: "",
        animate: "",
      },
      {
        id: 4,
        img: "/images/sloth.jpg",
        name: "sloth",
        status: "",
        animate: "",
      },
      {
        id: 4,
        img: "/images/sloth.jpg",
        name: "sloth",
        status: "",
        animate: "",
      },
      {
        id: 5,
        img: "/images/t-rex.jpg",
        name: "t-rex",
        status: "",
        animate: "",
      },
      {
        id: 5,
        img: "/images/t-rex.jpg",
        name: "t-rex",
        status: "",
        animate: "",
      },
    ].sort(() => {
      return Math.random() - 0.5;
    })
  );

  // State for managing the game state message
  const [gameState, setGameState] = useState(
    "Find pairs of cartoons that are identical."
  );

  // Function to handle card clicks
  const handleClick = (index) => {
    const numOfSelectedCards = deck.filter((card) => {
      return card.status === "selected";
    }).length;

    if (
      numOfSelectedCards === 0 &&
      deck[index].status !== "selected-match-found"
    ) {
      const newDeck = [...deck];
      newDeck[index].status = "selected";

      setDeck(newDeck);
    } else if (
      numOfSelectedCards === 1 &&
      deck[index].status !== "selected-match-found" &&
      deck[index].status !== "selected"
    ) {
      const selectedCard = deck.filter((card) => {
        return card.status === "selected";
      });

      if (selectedCard[0].id === deck[index].id) {
        const newDeck = [...deck];

        newDeck.forEach((card) => {
          if (card.id === selectedCard[0].id) {
            card.status = "selected-match-found";
          }
        });

        newDeck[index].status = "selected-match-found";

        setDeck(newDeck);
      } else if (selectedCard[0].id !== deck[index].id) {
        const newDeck = [...deck];

        const selectedCardIndex = newDeck.findIndex((element) => {
          return element.status === "selected";
        });

        newDeck[selectedCardIndex].status = "";

        newDeck[selectedCardIndex].animate = "flip";

        newDeck[index].animate = "flip";
        setDeck(newDeck);
      }
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setDeck(
      [
        {
          id: 0,
          img: "/images/lion.jpg",
          name: "lion",
          status: "",
          animate: "",
        },
        {
          id: 0,
          img: "/images/lion.jpg",
          name: "lion",
          status: "",
          animate: "",
        },
        {
          id: 1,
          img: "/images/penguin.jpg",
          name: "penguin",
          status: "",
          animate: "",
        },
        {
          id: 1,
          img: "/images/penguin.jpg",
          name: "penguin",
          status: "",
          animate: "",
        },
        {
          id: 2,
          img: "/images/monkey.jpg",
          name: "monkey",
          status: "",
          animate: "",
        },
        {
          id: 2,
          img: "/images/monkey.jpg",
          name: "monkey",
          status: "",
          animate: "",
        },
        {
          id: 3,
          img: "/images/shark.jpg",
          name: "shark",
          status: "",
          animate: "",
        },
        {
          id: 3,
          img: "/images/shark.jpg",
          name: "shark",
          status: "",
          animate: "",
        },
        {
          id: 4,
          img: "/images/sloth.jpg",
          name: "sloth",
          status: "",
          animate: "",
        },
        {
          id: 4,
          img: "/images/sloth.jpg",
          name: "sloth",
          status: "",
          animate: "",
        },
        {
          id: 5,
          img: "/images/t-rex.jpg",
          name: "t-rex",
          status: "",
          animate: "",
        },
        {
          id: 5,
          img: "/images/t-rex.jpg",
          name: "t-rex",
          status: "",
          animate: "",
        },
      ].sort(() => {
        return Math.random() - 0.5;
      })
    );
    setGameState("Find pairs of cartoons that are identical.");
  };

  // Effect to check if the game is over
  useEffect(() => {
    if (
      deck.filter((card) => {
        return card.status === "selected-match-found";
      }).length === deck.length
    ) {
      setGameState("Game Over! Hit 'Play Again' to restart.");
    }
  }, [deck]);

  return (
    <>
      {/* Display game state message */}
      <p>{gameState}</p>
      <div>
        <button onClick={resetGame}>Play Again</button>
      </div>
      {/* Display the deck of cards */}
      <div className="deck">
        {deck.map((card, index) => {
          return (
            <Card
              card={card}
              key={index}
              index={index}
              handleClick={handleClick}
            ></Card>
          );
        })}
      </div>
    </>
  );
};

export default Deck;
