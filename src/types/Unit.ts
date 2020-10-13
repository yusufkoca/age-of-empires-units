export enum Ages {
  All = 1,
  Dark,
  Feudal,
  Castle,
  Imperial,
}

export type Cost = {
  checked: boolean;
  range: [number, number];
};

export type UnitCostFilter = { [index: string]: Cost };

export type UnitCost = { [index: string]: number };

export type Unit = {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: Ages;
  cost: UnitCost | null;
  build_time?: number;
  reload_time?: number;
  attack_delay?: number;
  movement_rate?: number;
  line_of_sight: number;
  hit_points: number;
  range?: number | string;
  attack?: number;
  armor?: string;
  attack_bonus?: string[];
  accuracy?: string;
};

export default Unit;
