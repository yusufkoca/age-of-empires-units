import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { Unit, Resources } from '../types';

export default function useFilteredUnits() {
  const [filteredUnits, setFilteredUnits] = useState<Unit[]>([]);

  const unitsList = useSelector((state: RootState) => state.units.list);
  const ageFilter = useSelector((state: RootState) => state.filters.ageFilter);
  const unitCostFilter = useSelector((state: RootState) => state.filters.unitCostFilter);

  useEffect(() => {
    const newFilteredUnits = unitsList.filter((unit) => {
      if (unit.age < ageFilter) return false;

      if (unit.cost) {
        for (const item in unitCostFilter) {
          if (unitCostFilter[item as keyof typeof Resources].checked) {
            if (
              unit.cost[item as keyof typeof Resources] < unitCostFilter[item as keyof typeof Resources].range[0] ||
              unit.cost[item as keyof typeof Resources] > unitCostFilter[item as keyof typeof Resources].range[1]
            ) {
              return false;
            }
          }
        }
      }

      return true;
    });
    setFilteredUnits(newFilteredUnits);
  }, [ageFilter, unitCostFilter, unitsList]);

  return filteredUnits;
}
