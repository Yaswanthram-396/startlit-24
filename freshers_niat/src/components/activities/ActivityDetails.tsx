import React, { useState } from "react";
import "./activity.css";

export function ActivityDetails() {
  interface Game {
    name: string;
    image: string;
    description: string;
    rulesContent: string;
  }

  const games: Game[] = [
    {
      name: "Table Tennis 🏓",
      image: "https://i.ibb.co/wJycJF8/DALL-E-2024-12-03-12-43-14-A-vibrant-4-K-landscape-scene-of-a-professional-table-tennis-match-in-act.webp",
      description: "Test your reflexes and skills in an intense game of table tennis.",
      rulesContent: `
        **Objective:** Score points by hitting the ball over the net, making it bounce on the opponent's side.

        **Setup:**
        - Players: Doubles (2v2)
        - Table: Divided by a net

        **Gameplay:**
        - Serve: Ball must bounce on your side, then the opponent's.
        - Rally: Players hit the ball back and forth until one misses or hits out of bounds.

        **Scoring:**
        - Points are earned when the opponent misses or hits out.

        **Winning:**
        - First to 11 points wins. Match is usually best of 5 or 7 games.

        **Tips:**
        - Focus on consistency, placement, and spin. Play with precision and have fun!
      `,
    },
    {
      name: "Chess ♟",
      image: "https://i.ibb.co/fXB3KYb/052ed777-8079-482c-bd9b-061722e09ed1.webp",
      description: "Showcase your strategic thinking in the classic game of chess.",
      rulesContent: `
        **Objective:** Use strategy to checkmate your opponent.

        **Setup:**
        - Pieces: 16 per player
        - Board: 8x8 grid

        **Gameplay:**
        - Players take turns moving pieces according to rules.
        - Checkmate: Opponent's king is in check and cannot escape.

        **Winning:**
        - Checkmate or opponent resignation.

        **Tips:**
        - Control the center, develop your pieces, and protect your king.
      `,
    },
    {
      name: "Foosball 🏉",
      image: "https://i.ibb.co/Gnz0VFc/fooseball.webp",
      description: "Fast-paced action awaits in this thrilling foosball challenge.",
      rulesContent: `
        **Objective:** Score goals by maneuvering rods to hit the ball into the opponent's goal.

        **Setup:**
        - Players: Doubles (2v2)
        - Table: With rods and player figures.

        **Gameplay:**
        - Serve: Ball released from the center.
        - No Spinning: Rods cannot rotate more than 360°.

        **Winning:**
        - First to 10 goals wins.

        **Tips:**
        - Anticipate opponent moves and aim for precise shots.
      `,
    },
    {
      name: "Carroms 🎴",
      image: "https://i.ibb.co/56rgNns/cda0a557-fbd5-4fc1-9356-88dba51d06a0.webp",
      description: "Skillfully pocket coins in this traditional and engaging game.",
      rulesContent: `
        **Objective:** Pocket coins to earn points.

        **Setup:**
        - Players: Singles or doubles
        - Coins: White, black, and red (queen).

        **Gameplay:**
        - Pocket coins by striking them with the striker.
        - Queen: Must be covered by a carrom man after being pocketed.

        **Winning:**
        - Highest score after a set number of boards.

        **Tips:**
        - Plan shots and block opponents.
      `,
    },
    {
      name: "Air Hockey 🏒",
      image: "https://i.ibb.co/52RqZpj/5f78e7d0-c459-46e1-bb48-a45d5d941428.webp",
      description: "Experience the excitement of fast-paced air hockey battles.",
      rulesContent: `
        **Objective:** Score by hitting the puck into the opponent's goal.

        **Setup:**
        - Table: Low-friction with air jets.
        - Players: Singles or doubles.

        **Gameplay:**
        - Serve: Starts at the center.
        - Goals: Score points when the puck enters the goal.

        **Winning:**
        - First to reach 7 points.

        **Tips:**
        - Control the puck and aim for gaps in defense.
      `,
    },
  ];

  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (game: Game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGame(null);
  };

  const formatRules = (content: string) => {
    const sections = content.split("**");
    return sections.slice(1).map((section) => {
      const [title, ...bodyParts] = section.split(":");
      const body = bodyParts.join(":").trim();
      return { title: title.trim(), body };
    });
  };

  return (
    <div className="activity-details pt-4 px-4">
      {/* Game Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-11 pt-5">
        {games.map((game, index) => (
          <div
            key={index}
            className="game-card bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl cursor-pointer transition-all"
            onClick={() => openModal(game)}
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-purple-700 mb-2">{game.name}</h2>
              <p className="text-gray-600 mb-4">{game.description}</p>
              <button className="rules-btn bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 focus:outline-none">
                See Rules
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying game rules */}
      {isModalOpen && selectedGame && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="modal-content bg-gradient-to-t from-purple-800 to-indigo-700 rounded-lg shadow-2xl 
            w-[90%] md:w-[80%] lg:w-[70%] max-h-screen p-6 sm:p-8 lg:p-10 overflow-y-auto"
          >
            <h2 className="text-3xl font-semibold text-gray-200 mb-6 text-center">
              {selectedGame.name} Rules
            </h2>

            <div className="text-gray-200 text-lg leading-relaxed space-y-6">
              {formatRules(selectedGame.rulesContent).map((section, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold text-xl mb-2">{section.title}</h3>
                  <p>{section.body}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={closeModal}
                className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
