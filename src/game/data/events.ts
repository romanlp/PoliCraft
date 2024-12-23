import type { Event } from "../types/event.type";

export const EVENTS: Event[] = [
  {
    id: "natural_disaster",
    name: "Natural Disaster",
    description:
      "A major natural disaster has struck, causing widespread damage.",
    probability: 0.1, // 10% chance per turn
    effects: {
      budget: -500_000_000, // -£500 million
      happiness: -10, // -10 happiness
      population: -100_000, // -100,000 population
    },
  },
  {
    id: "economic_boom",
    name: "Economic Boom",
    description:
      "The economy is thriving, leading to increased tax revenue and public satisfaction.",
    probability: 0.05, // 5% chance per turn
    effects: {
      budget: 1_000_000_000, // +£1 billion
      happiness: 10, // +10 happiness
    },
  },
  {
    id: "protest",
    name: "Mass Protests",
    description: "Citizens are protesting due to unpopular policies.",
    probability: 0.2, // 20% chance per turn
    choices: [
      {
        description: "Appease the protesters with reforms.",
        effects: {
          budget: -200_000_000, // -£200 million
          happiness: +5, // +5 happiness
        },
      },
      {
        description: "Ignore the protests and enforce order.",
        effects: {
          happiness: -10, // -10 happiness
        },
      },
    ],
  },
];
