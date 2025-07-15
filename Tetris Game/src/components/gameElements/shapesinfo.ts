type Matrix3X3 = [
  [number, number, number],
  [number, number, number],
  [number, number, number]
];

interface shapeObject {
  shape: Matrix3X3;
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
