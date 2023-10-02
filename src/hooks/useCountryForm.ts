import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { categoryState, countryState } from '@/atoms';
import { INPUT_NAME } from '@/constants';

interface IForm {
  country: string;
}

const useCountryForm = () => {
  const setCountries = useSetRecoilState(countryState);
  const category = useRecoilValue(categoryState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();

  const handleValid = ({ country }: IForm) => {
    console.log(country);
    setCountries((oldValue) => [{ text: country, id: Date.now(), category }, ...oldValue]);
    setValue(INPUT_NAME, '');
  };

  return {
    handleSubmit,
    handleValid,
    register,
    errors,
  };
};

export default useCountryForm;
