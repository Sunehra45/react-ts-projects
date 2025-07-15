import { useState, useRef, useCallback, useEffect } from "react";
import { shapes, getRandomColor } from "./shapesinfo";
import type { shapeObject } from "./shapesinfo";
import '../../App.css'


interface Position {
  xPosition: number;
  yPosition: number;
}

interface Info {
  index: null | number;
  offsetX: number;
  offsetY: number;
}

const Blocks: React.FC = () => {
  const activeShapesref = useRef<shapeObject[]>(
    [...shapes]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((shape) => ({
        ...shape,
        color: getRandomColor(),
      }))
  );

  const initialXpositions: number[] = [600, 800, 1000];
  const initialYpositions: number[] = [500, 500, 500]; // vertical distance of all shapes  will be equal

  const [positions, setPositions] = useState<Position[]>(
    activeShapesref.current.map((_, i) => ({
      xPosition: initialXpositions[i],
      yPosition: initialYpositions[i],
    }))
  );

  const dragInfo = useRef<Info>({
    index: null,
    offsetX: 0, // x & y axis not dragged yet
    offsetY: 0,
  });

  const handleDrag = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ): void => {
    dragInfo.current = {
      index,
      offsetX: e.clientX - positions[index].xPosition,
      offsetY: e.clientY - positions[index].yPosition,
    };
    // console.log(dragInfo.current);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (dragInfo.current.index === null) return;

    setPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      const index = dragInfo.current.index;
      if (index === null) return prevPositions;
      newPositions[index] = {
        xPosition: e.clientX - dragInfo.current.offsetX,
        yPosition: e.clientY - dragInfo.current.offsetY,
      };
      return newPositions;
    });
  }, []);

  const handleMouseUp = (): void => {
    dragInfo.current = {
      index: null,
      offsetX: 0,
      offsetY: 0,
    };
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <>
      {activeShapesref.current.map((shape, index) => {
       console.log("hey this is working")
        return (
          <div
            key={index}
            className='cursor-grab p-20'
            onMouseDown={(e) => {
              handleDrag(e, index);
            }}
            style={{
              position: "absolute",
              left: positions[index].xPosition,
              top: positions[index].yPosition,
            }}>
            {shape.shape.map((row, rowIndex) => (
              <div key={rowIndex} className='flex'>
                {row.map((cell, cellIndex) =>
                  cell === 0 ? null : (
                    <div
                      key={cellIndex}
                      className='w-12 h-12 border-2 border-black'
                      style={{ backgroundColor: shape.color }}
                    />
                  )
                )}
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default Blocks;
