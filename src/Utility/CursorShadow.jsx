import React, { useEffect, useRef } from "react";

const CursorShadow = () => {
  const cursorRef = useRef(null);
  const cursorSize = 20;

  const cursorStyle = {
    width: `${cursorSize}px`,
    height: `${cursorSize}px`,
    position: "fixed",
    borderRadius: "50%",
    background: "red",
    pointerEvents: "none",
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = cursorRef.current;
      if (cursor) {
        const x = e.clientX - cursorSize / 2;
        const y = e.clientY - cursorSize / 2;

        requestAnimationFrame(() => {
          cursor.style.left = `${x}px`;
          cursor.style.top = `${y}px`;
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return <div id="cursor" ref={cursorRef} style={cursorStyle}></div>;
};

export default CursorShadow;
