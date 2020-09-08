export default [
  {
    id: 0,
    position: { x: 1, y: 3 },
    rotation: 2,
    cells: [
      // 0 wall, 1 empty
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0],
      [0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    ],
    items: {
      wall: [
        // type: 0 manacles, 1 switch door, 2 mirror, 3 hook, 4 LazyHall (writing), 5 LazyAltar (writing), 6 Altar, 7 Fence, 8 Ring, 9 Grate, 10 TorchFull, 11 TorchEmpty, 12 scroll on altar
        {
          position: { x: 4, y: 18 },
          rotation: 0,
          type: 6,
        },
        {
          position: { x: 4, y: 18 },
          rotation: 0,
          type: 12,
        },
        {
          position: { x: 3, y: 14 },
          rotation: 1,
          type: 11,
        },
        {
          position: { x: 3, y: 14 },
          rotation: 1,
          type: 10,
        },
        {
          position: { x: 12, y: 6 },
          rotation: 3,
          type: 9,
        },
        {
          position: { x: 5, y: 10 },
          rotation: 2,
          type: 9,
        },
        {
          position: { x: 3, y: 18 },
          rotation: 0,
          type: 9,
        },
        {
          position: { x: 2, y: 16 },
          rotation: 2,
          type: 9,
        },
        {
          position: { x: 17, y: 11 },
          rotation: 3,
          type: 8,
        },
        {
          position: { x: 13, y: 8 },
          rotation: 2,
          type: 8,
        },
        {
          position: { x: 10, y: 14 },
          rotation: 2,
          type: 8,
        },
        {
          position: { x: 5, y: 15 },
          rotation: 3,
          type: 8,
        },
        {
          position: { x: 3, y: 16 },
          rotation: 1,
          type: 8,
        },
        {
          position: { x: 0, y: 17 },
          rotation: 1,
          type: 8,
        },
        {
          position: { x: 3, y: 9 },
          rotation: 1,
          type: 0,
        },
        {
          position: { x: 1, y: 14 },
          rotation: 0,
          type: 1,
        },
        {
          position: { x: 1, y: 14 },
          rotation: 2,
          type: 1,
        },
        {
          position: { x: 5, y: 12 },
          rotation: 1,
          type: 3,
        },
        {
          position: { x: 7, y: 1 },
          rotation: 3,
          type: 3,
        },
        {
          position: { x: 5, y: 4 },
          rotation: 1,
          type: 3,
        },
        {
          position: { x: 8, y: 5 },
          rotation: 0,
          type: 4,
        },
        {
          position: { x: 5, y: 17 },
          rotation: 3,
          type: 5,
        },
        {
          position: { x: 14, y: 8 },
          rotation: 2,
          type: 7,
        },
        {
          position: { x: 10, y: 14 },
          rotation: 1,
          type: 7,
        },
        {
          position: { x: 16, y: 5 },
          rotation: 2,
          type: 7,
        },
        {
          position: { x: 10, y: 3 },
          rotation: 2,
          type: 2,
        },
        {
          position: { x: 14, y: 2 },
          rotation: 2,
          type: 2,
        },
        {
          position: { x: 16, y: 4 },
          rotation: 3,
          type: 2,
        },
        {
          position: { x: 14, y: 7 },
          rotation: 0,
          type: 2,
        },
        {
          position: { x: 16, y: 7 },
          rotation: 2,
          type: 2,
        },
        {
          position: { x: 17, y: 10 },
          rotation: 0,
          type: 2,
        },
        {
          position: { x: 16, y: 15 },
          rotation: 0,
          type: 2,
        },
        {
          position: { x: 16, y: 16 },
          rotation: 2,
          type: 2,
        },
        {
          position: { x: 15, y: 12 },
          rotation: 3,
          type: 2,
        },
        {
          position: { x: 13, y: 11 },
          rotation: 2,
          type: 2,
        },
        {
          position: { x: 14, y: 14 },
          rotation: 3,
          type: 2,
        },
        {
          position: { x: 11, y: 13 },
          rotation: 1,
          type: 2,
        },
        {
          position: { x: 11, y: 16 },
          rotation: 0,
          type: 2,
        },
        {
          position: { x: 8, y: 14 },
          rotation: 2,
          type: 2,
        },
        {
          position: { x: 7, y: 17 },
          rotation: 0,
          type: 2,
        },
        {
          position: { x: 5, y: 13 },
          rotation: 1,
          type: 2,
        },
        {
          position: { x: 7, y: 14 },
          rotation: 0,
          type: 2,
        },
        {
          position: { x: 10, y: 13 },
          rotation: 3,
          type: 2,
        },
        {
          position: { x: 7, y: 8 },
          rotation: 2,
          type: 2,
        },
        {
          position: { x: 9, y: 10 },
          rotation: 0,
          type: 2,
        },
        {
          position: { x: 11, y: 11 },
          rotation: 0,
          type: 2,
        },
        {
          position: { x: 12, y: 8 },
          rotation: 2,
          type: 2,
        },
        {
          position: { x: 8, y: 7 },
          rotation: 1,
          type: 2,
        },
        {
          position: { x: 10, y: 6 },
          rotation: 0,
          type: 2,
        },
      ],
    },
  },
];
