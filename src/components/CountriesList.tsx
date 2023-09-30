import React from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  country: string;
}

const CountriesList = ({ title }: { title: string }) => {
  const { register, handleSubmit, formState } = useForm<IForm>();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register('country', { required: '필수 항목입니다.' })}
          placeholder="Write a country"
        ></input>
        <button>Add</button>
      </form>
    </>
  );
};

export default CountriesList;
