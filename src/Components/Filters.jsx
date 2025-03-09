import React, { useState } from 'react';
import Modal from './Modal';

export default function Filters({ open, onClose, onSelect, dataFilter }) {
  const [selectedCategory, setSelectedCategory] = useState('any');
  const [selectedGlass, setSelectedGlass] = useState('any');

  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSelectGlass = (event) => {
    setSelectedGlass(event.target.value);
  };

  const handleSubmit = () => {
    onSelect(selectedCategory, selectedGlass);
    onClose();
  };

  return (
    <Modal open={open} >
      <h2 className="text-2xl mb-4">Filters</h2>

      <h3 className="text-xl font-semibold mt-4">Choose category:</h3>
      <form>
        <div>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="category"
              value="any"
              checked={selectedCategory === 'any'}
              onChange={handleSelectCategory}
            />
            Any
          </label>
        </div>

        {dataFilter.category.map((option) => (
          <div key={option}>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="category"
                value={option}
                checked={selectedCategory === option}
                onChange={handleSelectCategory}
              />
              {option}
            </label>
          </div>
        ))}

        <h3 className="text-xl font-semibold mt-4">Choose glass:</h3>
        <div>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="glass"
              value="any"
              checked={selectedGlass === 'any'}
              onChange={handleSelectGlass}
            />
            Any
          </label>
        </div>

        {dataFilter.glass.map((option) => (
          <div key={option}>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="glass"
                value={option}
                checked={selectedGlass === option}
                onChange={handleSelectGlass}
              />
              {option}
            </label>
          </div>
        ))}

        <div className="mt-4">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!selectedCategory || !selectedGlass}
            className="px-4 py-2 mr-2 text-xl text-[#274276] bg-[#D9E8FF]
                       border border-[#80B3FF] rounded-lg
                       disabled:opacity-50
                       hover:bg-white"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xl text-[#274276] bg-[#D9E8FF]
                       border border-[#80B3FF] rounded-lg
                       hover:bg-white"
          >
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
}
