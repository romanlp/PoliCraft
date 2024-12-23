export interface Event {
  id: string;
  name: string;
  description: string;
  probability: number; // 0.0 to 1.0 (chance of triggering per turn)
  effects?: {
    budget?: number; // Change in budget
    happiness?: number; // Change in happiness
    population?: number; // Change in population
  };
  choices?: {
    description: string; // Description of the choice
    effects: {
      budget?: number;
      happiness?: number;
      population?: number;
    };
  }[];
}
