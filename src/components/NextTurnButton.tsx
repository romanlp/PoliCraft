import { advanceTurn } from "../game/logic/advanceTurn";

export const NextTurnButton = () => {
  return (
    <button
      class="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={advanceTurn}
    >
      Next Turn
    </button>
  );
};
