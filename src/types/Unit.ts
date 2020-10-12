export enum Ages {
  All = 'ALL',
  Dark = 'DARK',
  Feudal = 'FEUDAL',
  Castle = 'CASTLE',
  Imperial = 'IMPERIAL',
}

export type Cost = {
  checked: boolean;
  min: number;
  max: number;
};

export type UnitCostFilter = { [index: string]: Cost };

export type UnitCost = {
  Food?: number;
  Wood?: number;
  Gold?: number;
};

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
