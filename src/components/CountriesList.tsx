import React from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  country: string;
}

const CountriesList = ({ title }: { title: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log(data.country);
    setValue('country', '');
  };
  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register('country', { required: '필수 항목입니다.' })}
          placeholder="Write a country"
        ></input>
        <button>Add</button>
      </form>
      <span>{errors?.country?.message}</span>
    </>
  );
};

export default CountriesList;
