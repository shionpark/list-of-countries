import React from 'react';
import { Categories, ICountry } from '@/atoms';
import { useFilterCountry } from '@/hooks';

const TravelListByCategory = ({ text, id, category }: ICountry) => {
  const { onClick, onDeleteClick } = useFilterCountry({ text, id, category });

  return (
    <>
      <div>
        <span>{text}</span>
        {category !== Categories.WANNA_GO && (
          <button name={Categories.WANNA_GO} onClick={onClick}>
            Wanna Go
          </button>
        )}
        {category !== Categories.HAVE_BEEN && (
          <button name={Categories.HAVE_BEEN} onClick={onClick}>
            Have been
          </button>
        )}
        {category !== Categories.FAVS && (
          <button name={Categories.FAVS} onClick={onClick}>
            Favorite
          </button>
        )}
        <button onClick={onDeleteClick}>❌</button>
      </div>
    </>
  );
};

export default TravelListByCategory;
