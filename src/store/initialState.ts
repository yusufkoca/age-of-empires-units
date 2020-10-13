import jsonData from '../assets/age-of-empires-units.json';
import { Ages, Resources, Unit, UnitCostFilter } from '../types';

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
      [Resources.Food]: { checked: false, range: [0, 200] },
      [Resources.Wood]: { checked: false, range: [0, 200] },
      [Resources.Gold]: { checked: false, range: [0, 200] },
    },
  },
};

export default initialState;
