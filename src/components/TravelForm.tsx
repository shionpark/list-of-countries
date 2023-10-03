import React from 'react';
import { useCreateListForm } from '@/hooks';

const TravelForm = () => {
  const { handleSubmit, onValid, register, errors } = useCreateListForm();

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register('country', { required: '필수 항목입니다.' })}
          placeholder="Write a country"
        />
        <button>Add</button>
      </form>
      <span>{errors?.country?.message}</span>
    </>
  );
};

export default TravelForm;
