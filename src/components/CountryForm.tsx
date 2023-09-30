import React from 'react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

import { countryState } from '@/atoms';
import { INPUT_NAME } from '@/constants';

interface IForm {
  country: string;
}

const CountryForm = () => {
  const setCountries = useSetRecoilState(countryState);

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
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register(INPUT_NAME, { required: '필수 항목입니다.' })}
          placeholder="Write a country"
        />
        <button>Add</button>
      </form>
      <span>{errors?.country?.message}</span>
    </>
  );
};

export default CountryForm;
