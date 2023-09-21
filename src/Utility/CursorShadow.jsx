import React, { useEffect, useRef } from "react";

const CursorShadow = () => {
  const cursorRef = useRef(null);
  const cursorSize = 200;

  const cursorStyle = {
    width: `${cursorSize}px`,
    height: `${cursorSize}px`,
    position: "fixed",
    borderRadius: "50%",
    pointerEvents: "none",
    background:"radial-gradient(circle, rgba(0,25,74,1) 0%, rgba(0,0,0,0) 80%)"
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
  return <div className="cursor" ref={cursorRef} style={cursorStyle}></div>;
};

export default CursorShadow;
