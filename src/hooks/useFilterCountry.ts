import { useSetRecoilState } from 'recoil';
import { ICountry, countryState } from '@/atoms';

const useFilterCountry = ({ text, id }: ICountry) => {
  const setCountries = useSetRecoilState(countryState);

  const onDeleteClick = () => {
    setCountries((oldValue) => oldValue.filter((country) => country.id !== id));
  };

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setCountries((oldValue) => {
      const targetIndex = oldValue.findIndex((country) => country.id === id);
      const newCountry = { text, id, category: name as any };
      return [...oldValue.slice(0, targetIndex), newCountry, ...oldValue.slice(targetIndex + 1)];
    });
  };

  return {
    onClick,
    onDeleteClick,
  };
};

export default useFilterCountry;
