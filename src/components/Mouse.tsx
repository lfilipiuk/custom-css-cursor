import React, { useEffect, useRef } from "react";
import useMouseInteraction from "../hooks/useMouseInteraction";

const Mouse: React.FC = () => {
  const { position, followPosition, activeState, linkHovered, linkUnhovered } =
    useMouseInteraction();

  const defaultCirclePosition = {
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  const followCirclePosition = {
    left: `${followPosition.x}px`,
    top: `${followPosition.y}px`,
  };

  const cursorRef = useRef<HTMLDivElement>(null);
  const prevActiveState = useRef(activeState);

    const cursorClass = `cursor ${!activeState ? "right-clicked" : ""} ${
        linkHovered ? "link-hovered" : linkUnhovered ? "link-unhovered" : ""
    }`;

    const cursorFollowerClass = `cursor-follower ${!activeState ? "right-clicked" : ""} ${
        linkHovered ? "link-hovered-follower" : linkUnhovered ? "link-unhovered-follower" : ""
    }`;

    useEffect(() => {
        if (cursorRef.current) {
            if (!prevActiveState.current && activeState) {
                cursorRef.current.classList.remove("link-hovered", "link-unhovered");
                cursorRef.current.classList.add("enlarge");
            } else if (linkHovered) {
                cursorRef.current.classList.add("link-hovered");
            } else if (linkUnhovered) {
                cursorRef.current.classList.add("link-unhovered");
            }
        }

        prevActiveState.current = activeState;
    }, [activeState, linkHovered, linkUnhovered]);

  return (
    <div>
      <div
        ref={cursorRef}
        className={cursorClass}
        style={defaultCirclePosition}
      />
      <div
        className={`${!activeState ? "dot" : "empty-circle"}`}
        style={defaultCirclePosition}
      />
      {activeState && (
        <div className={cursorFollowerClass} style={followCirclePosition} />
      )}
    </div>
  );
};

export default Mouse;
