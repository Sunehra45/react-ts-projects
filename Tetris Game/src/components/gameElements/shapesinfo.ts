export type Blockshape = [
  [number, number, number],
  [number, number, number],
  [number, number, number],
];

export interface shapeObject {
  shape: Blockshape;
  color ?: string,
}

export const shapes: shapeObject[] = [
  {
    shape: [
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
  },
  {
    shape: [
      [1, 0, 0],
      [1, 0, 0],
      [0, 0, 0],
    ],
  },
  {
    shape: [
      [1, 0, 0],
      [1, 0, 0],
      [1, 0, 0],
    ],
  },
  {
    shape: [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
  },
  {
    shape: [
      [1, 0, 0],
      [1, 1, 0],
      [1, 0, 0],
    ],
  },
  {
    shape: [
      [1, 1, 0],
      [1, 1, 0],
      [1, 1, 0],
    ],
  },
  {
    shape: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
  },
  {
    shape: [
      [0, 0, 1],
      [0, 1, 1],
      [0, 0, 1],
    ],
  },
  {
    shape: [
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 1],
    ],
  },
  {
    shape: [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
  },
];

export function getRandomColor() {
  const brightColors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "pink",
    "cyan",
    "lime",
    "yellow",
    "magenta",
    "turquoise",
    "gold",
    "hotpink",
    "deepskyblue",
  ];
  return brightColors[Math.floor(Math.random() * brightColors.length)];
}
