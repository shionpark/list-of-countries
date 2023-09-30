import React from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  country: string;
}

const CountriesList = ({ title }: { title: string }) => {
  const { register } = useForm<IForm>();
  return (
    <>
      <h1>{title}</h1>
      <form>
        <input {...register('country')} placeholder="Write a country"></input>
        <button>Add</button>
      </form>
    </>
  );
};

export default CountriesList;
