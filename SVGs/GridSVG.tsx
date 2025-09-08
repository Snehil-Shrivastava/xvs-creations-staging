"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import "./Styles/GridSVG.css";
import useWindowWidth from "@/hooks/windowWidth";

const GridSVG = () => {
  const width = useWindowWidth();
  const gridSize = 35; // For a 10x10 grid
  const svgViewBoxSize = width; // A fixed viewBox size for consistent cell sizing
  const cellSize = svgViewBoxSize / gridSize;

  const [litCells, setLitCells] = useState({});

  const litCellsRef = useRef(litCells);

  const [hoveredCell, setHoveredCell] = useState(null);

  const glowColor = "#c46608"; // Deep Sky Blue - a vibrant single color for the glow

  const defaultCellFill = "#282828"; // A dark grey for the cell background
  const defaultCellStroke = "rgba(243, 237, 222, 0.2)"; // A slightly lighter grey for the grid lines

  useEffect(() => {
    litCellsRef.current = litCells;
  }, [litCells]);

  const isCellAvailable = useCallback(
    // @ts-expect-error random
    (row, col, currentLitCells, gridDimension) => {
      const cellId = `${row}-${col}`;
      if (currentLitCells[cellId]) {
        return false;
      }

      for (let rOffset = -1; rOffset <= 1; rOffset++) {
        for (let cOffset = -1; cOffset <= 1; cOffset++) {
          if (rOffset === 0 && cOffset === 0) continue;

          const neighborRow = row + rOffset;
          const neighborCol = col + cOffset;

          if (
            neighborRow >= 0 &&
            neighborRow < gridDimension &&
            neighborCol >= 0 &&
            neighborCol < gridDimension
          ) {
            const neighborId = `${neighborRow}-${neighborCol}`;
            if (currentLitCells[neighborId]) {
              return false;
            }
          }
        }
      }
      return true;
    },
    []
  );

  const lightUpRandomCell = useCallback(() => {
    const MAX_PICK_ATTEMPTS = gridSize * gridSize * 2;
    let attempts = 0;
    let foundSuitableCell = false;
    // @ts-expect-error random
    let randomRow, randomCol, cellId;

    const currentLitCells = litCellsRef.current;

    while (attempts < MAX_PICK_ATTEMPTS && !foundSuitableCell) {
      randomRow = Math.floor(Math.random() * gridSize);
      randomCol = Math.floor(Math.random() * gridSize);
      cellId = `${randomRow}-${randomCol}`;

      if (isCellAvailable(randomRow, randomCol, currentLitCells, gridSize)) {
        foundSuitableCell = true;
      }
      attempts++;
    }

    if (foundSuitableCell) {
      setLitCells((prevLitCells) => ({
        ...prevLitCells, // Copy all existing lit cells
        // @ts-expect-error random
        [cellId]: glowColor, // Always use the single glowColor
      }));

      setTimeout(() => {
        setLitCells((prevLitCells) => {
          const newLitCells = { ...prevLitCells };
          // @ts-expect-error random
          delete newLitCells[cellId];
          return newLitCells;
        });
      }, 2000); // The cell will stay lit for 500 milliseconds (half a second).
    }
  }, [glowColor, gridSize, isCellAvailable]); // Dependencies: glowColor, gridSize, and isCellAvailable (memoized).

  useEffect(() => {
    const interval = setInterval(lightUpRandomCell, 1000); // A new cell attempts to light up every 200ms.

    return () => {
      clearInterval(interval);
    };
  }, [lightUpRandomCell]); // Dependency: lightUpRandomCell (memoized by useCallback).

  useEffect(() => {
    const interval2 = setInterval(lightUpRandomCell, 1500); // A new cell attempts to light up every 200ms.

    return () => {
      clearInterval(interval2);
    };
  }, [lightUpRandomCell]); // Dependency: lightUpRandomCell (memoized by useCallback).

  useEffect(() => {
    const interval3 = setInterval(lightUpRandomCell, 2000); // A new cell attempts to light up every 200ms.

    return () => {
      clearInterval(interval3);
    };
  }, [lightUpRandomCell]); // Dependency: lightUpRandomCell (memoized by useCallback).

  useEffect(() => {
    const interval4 = setInterval(lightUpRandomCell, 2500); // A new cell attempts to light up every 200ms.

    return () => {
      clearInterval(interval4);
    };
  }, [lightUpRandomCell]); // Dependency: lightUpRandomCell (memoized by useCallback).

  const renderGridCells = () => {
    const cells = [];
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const cellId = `${row}-${col}`;

        const fillColor =
          // @ts-expect-error random
          litCells[cellId] ||
          (hoveredCell === cellId ? glowColor : defaultCellFill);

        cells.push(
          <rect
            key={cellId} // Unique key for each React element in a list is crucial for performance and stability.
            x={col * cellSize} // X-coordinate of the top-left corner of the rectangle.
            y={row * cellSize} // Y-coordinate of the top-left corner of the rectangle.
            width={cellSize} // Width of the rectangle.
            height={cellSize} // Height of the rectangle.
            fill={fillColor} // Dynamic fill color based on whether the cell is lit.
            stroke={defaultCellStroke} // Stroke (border) color.
            strokeWidth="1" // Stroke width.
            className={`transition-all duration-300 ease-in-out box-shadow`}
            // @ts-expect-error random
            onMouseEnter={() => setHoveredCell(cellId)}
            onMouseLeave={() => setHoveredCell(null)}
          />
        );
      }
    }
    return cells;
  };
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      className={`rounded-2xl grid-container pointer-events-none`}
    >
      {renderGridCells()}
    </svg>
  );
};

export default GridSVG;
