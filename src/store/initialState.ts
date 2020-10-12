import jsonData from '../assets/age-of-empires-units.json';
import { Ages, Unit } from '../types';

type initialStateType = {
  units: {
    list: Unit[];
    filteredList: Unit[];
  };
  filters: {
    age: Ages;
  };
};

const initialState: initialStateType = {
  units: {
    list: jsonData.units.map((unit) => {
      return { ...unit, age: Ages[unit.age as keyof typeof Ages] };
    }),
    filteredList: [],
  },
  filters: {
    age: Ages.All,
  },
};

export default initialState;
