import Modal from "./Modal";
import { useState } from "react";

export default function CocktailElement({ cocktail, fun, defaultIsFav }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [isFav, setIsFav] = useState(defaultIsFav);

  async function fetchMeals() {
    const response = await fetch(`https://cocktails.solvro.pl/api/v1/cocktails/${cocktail.id}`);
    const data = await response.json();
    setIngredients(data.data.ingredients);
  }

  const openModal = () => {
    fetchMeals();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[var(--color5)] rounded-xl overflow-hidden text-center shadow-md hover:bg-[var(--color6)]">
      <article className="h-full flex flex-col justify-between">
        <img
          className="w-[22rem] h-full object-cover"
          src={cocktail.imageUrl}
          alt={cocktail.name}
        />
        <div className="p-4">
          <h3 className="text-2xl font-bold my-3 text-[var(--color2)]">
            {cocktail.name} {isFav && "<3"}
          </h3>
          <p className="inline-block bg-[var(--color4)] text-[var(--color1)] text-sm font-bold px-8 py-2 rounded">
            {cocktail.alcoholic ? "contains alcohol" : "does not contain alcohol"}
          </p>
         
          <p className="my-4 text-[var(--color2)]">{cocktail.category}<br />{cocktail.glass}</p>

          <div className="space-x-2">
           
            <button
              className="text-white text-base cursor-pointer bg-[#80B3FF] border-4 border-[#80B3FF] rounded-lg px-4 py-2"
              onClick={openModal}
            >
              show instruction
            </button>

            {/* Ulubione */}
            <button
              className="text-white text-base cursor-pointer bg-[#80B3FF] border border-[#80B3FF] rounded-lg px-4 py-2"
              onClick={() => {
                fun(cocktail, !isFav);
                setIsFav((prev) => !prev);
              }}
            >
              {isFav ? "remove from <3" : "add do <3"}
            </button>
          </div>
        </div>
      </article>

      {/* Modal */}
      {isModalOpen && (
        <Modal open={isModalOpen}>
          <div className="bg-[#274276] rounded-md shadow-lg p-4 w-[80%] max-w-[40rem] max-h-[80%] text-white">
            <h2 className="m-0 text-2xl font-bold">{cocktail.name}</h2>
            <h3 className="text-xl mt-2">ingredients:</h3>
            <ul className="list-disc list-inside">
              {ingredients.length > 0 &&
                ingredients.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <h3 className="text-xl mt-4">instruction:</h3>
            <p className="mb-4">{cocktail.instructions}</p>

            <button
              className="text-[#274276] text-xl cursor-pointer bg-[#D9E8FF] border border-[#80B3FF] rounded-lg px-4 py-2 mt-2"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
