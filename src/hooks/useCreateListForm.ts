import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { categoryState, countryState } from '@/atoms';

interface IForm {
  country: string;
}

const useCreateListForm = () => {
  const setCountries = useSetRecoilState(countryState);
  const category = useRecoilValue(categoryState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();

  const onValid = ({ country }: IForm) => {
    setCountries((oldValue) => [{ text: country, id: Date.now(), category }, ...oldValue]);
    setValue('country', '');
  };

  return {
    handleSubmit,
    onValid,
    register,
    errors,
  };
};

export default useCreateListForm;
