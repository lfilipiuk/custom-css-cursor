import { useEffect, useState } from "react";

const useMouseInteraction = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followPosition, setFollowPosition] = useState({ x: 0, y: 0 });
  const [activeState, setActiveState] = useState(true);
  const [linkHovered, setLinkHovered] = useState(false);
  const [linkUnhovered, setLinkUnhovered] = useState(false);

  useEffect(() => {
    const moveListener = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setActiveState(true);
    };

    window.addEventListener("mousemove", moveListener);

    return () => {
      window.removeEventListener("mousemove", moveListener);
    };
  }, []);

  useEffect(() => {
    let frameId: number | null = null;

    const followListener = () => {
      setFollowPosition((prevState) => {
        const deltaX = position.x - prevState.x;
        const deltaY = position.y - prevState.y;

        return {
          x: prevState.x + deltaX / 7,
          y: prevState.y + deltaY / 7,
        };
      });

      frameId = window.requestAnimationFrame(followListener);
    };

    followListener();

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [position]);

  useEffect(() => {
    const rightClickListener = (e: MouseEvent) => {
      if (e.button === 2) {
        setActiveState(false);
      }
    };

    const clickListener = () => {
      setActiveState(true);
    };

    const mouseLeaveListener = () => {
      setActiveState(false);
    };

    const mouseoverListener = (e: MouseEvent) => {
      if ((e.target as Element).tagName.toLowerCase() === 'a') {
        setLinkHovered(true);
        setLinkUnhovered(false);
      }
    };

    const mouseoutListener = (e: MouseEvent) => {
      if ((e.target as Element).tagName.toLowerCase() === 'a') {
        setLinkHovered(false);
        setLinkUnhovered(true);
      }
    };

    window.addEventListener("contextmenu", rightClickListener);
    window.addEventListener("click", clickListener);
    window.addEventListener("mouseout", mouseLeaveListener);
    window.addEventListener('mouseover', mouseoverListener);
    window.addEventListener('mouseout', mouseoutListener);

    return () => {
      window.removeEventListener("contextmenu", rightClickListener);
      window.removeEventListener("click", clickListener);
      window.removeEventListener("mouseout", mouseLeaveListener);
      window.removeEventListener('mouseover', mouseoverListener);
      window.removeEventListener('mouseout', mouseoutListener);
    };
  }, []);

  return { position, followPosition, activeState, linkHovered, linkUnhovered };
};

export default useMouseInteraction;
