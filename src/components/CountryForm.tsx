import React from 'react';
import { useCountryForm } from '@/hooks';
import { INPUT_NAME } from '@/constants';

const CountryForm = () => {
  const { handleSubmit, handleValid, register, errors } = useCountryForm();

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
