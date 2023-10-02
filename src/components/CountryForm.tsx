import React from 'react';
import { useCountryForm } from '@/hooks';
import { ATOM_KEY } from '@/constants';

const CountryForm = () => {
  const { handleSubmit, handleValid, register, errors } = useCountryForm();

  return (
    <>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register(ATOM_KEY.COUNTRY, { required: '필수 항목입니다.' })}
          placeholder="Write a country"
        />
        <button>Add</button>
      </form>
      <span>{errors?.country?.message}</span>
    </>
  );
};

export default CountryForm;
