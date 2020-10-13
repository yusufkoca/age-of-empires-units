import jsonData from '../assets/age-of-empires-units.json';
import { Ages, Unit, UnitCostFilter } from '../types';

type initialStateType = {
  units: {
    list: Unit[];
  };
  filters: {
    ageFilter: Ages;
    unitCostFilter: UnitCostFilter;
  };
};

const initialState: initialStateType = {
  units: {
    list: jsonData.units.map((unit) => {
      return {
        ...unit,
        age: Ages[unit.age as keyof typeof Ages],
        cost: { ...{ Food: 0, Wood: 0, Gold: 0 }, ...unit.cost },
      };
    }),
  },
  filters: {
    ageFilter: Ages.All,
    unitCostFilter: {
      Food: { checked: false, range: [0, 200] },
      Wood: { checked: false, range: [0, 200] },
      Gold: { checked: false, range: [0, 200] },
    },
  },
};

export default initialState;
