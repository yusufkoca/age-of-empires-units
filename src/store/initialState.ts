import jsonData from '../assets/age-of-empires-units.json';
import { Ages, Unit, UnitCostFilter } from '../types';

type initialStateType = {
  units: {
    list: Unit[];
    filteredList: Unit[];
  };
  filters: {
    ageFilter: Ages;
    unitCostFilter: UnitCostFilter;
  };
};

const initialState: initialStateType = {
  units: {
    list: jsonData.units.map((unit) => {
      return { ...unit, age: Ages[unit.age as keyof typeof Ages] };
    }),
    filteredList: jsonData.units.map((unit) => {
      return { ...unit, age: Ages[unit.age as keyof typeof Ages] };
    }),
  },
  filters: {
    ageFilter: Ages.All,
    unitCostFilter: {
      Food: { checked: false, min: 0, max: 200 },
      Wood: { checked: false, min: 0, max: 200 },
      Gold: { checked: false, min: 0, max: 200 },
    },
  },
};

export default initialState;
