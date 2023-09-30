import React from 'react';
import { useForm } from 'react-hook-form';
import { atom, useRecoilState } from 'recoil';

const INPUT_NAME = 'country';

interface IForm {
  country: string;
}

interface ICountry {
  text: string;
  id: number;
  category: 'WANNA_GO' | 'HAVE_BEEN' | 'FAVS';
}

const countryState = atom<ICountry[]>({
  key: INPUT_NAME,
  default: [],
});

const CountriesList = ({ title }: { title: string }) => {
  const [countries, setCountries] = useRecoilState(countryState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();

  const handleValid = ({ country }: IForm) => {
    console.log(country);
    setCountries((oldValue) => [
      { text: country, id: Date.now(), category: 'WANNA_GO' },
      ...oldValue,
    ]);
    setValue(INPUT_NAME, '');
  };

  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register(INPUT_NAME, { required: '필수 항목입니다.' })}
          placeholder="Write a country"
        />
        <button>Add</button>
      </form>
      <span>{errors?.country?.message}</span>
      <ul>
        {countries.map((i) => (
          <li key={i.id}>{i.text}</li>
        ))}
      </ul>
    </>
  );
};

export default CountriesList;
