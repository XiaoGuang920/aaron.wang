import React, { useEffect, useRef } from "react";

export default function WaterDrop({ targetRef }) {
  const dropRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const targetEl = targetRef?.current;
    const dropEl = dropRef.current;
    if (!targetEl || !dropEl) return undefined;

    const move = (clientX, clientY) => {
      const rect = targetEl.getBoundingClientRect();
      targetPosRef.current.x = clientX - rect.left;
      targetPosRef.current.y = clientY - rect.top;
    };

    const onMouseMove = (event) => {
      move(event.clientX, event.clientY);
    };

    const onTouchMove = (event) => {
      const touch = event.touches?.[0];
      if (!touch) return;
      move(touch.clientX, touch.clientY);
    };

    const animate = () => {
      posRef.current.x += (targetPosRef.current.x - posRef.current.x) * 0.12;
      posRef.current.y += (targetPosRef.current.y - posRef.current.y) * 0.12;
      dropEl.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      rafRef.current = window.requestAnimationFrame(animate);
    };

    const rect = targetEl.getBoundingClientRect();
    posRef.current = { x: rect.width * 0.72, y: rect.height * 0.38 };
    targetPosRef.current = { ...posRef.current };
    animate();

    targetEl.addEventListener("mousemove", onMouseMove);
    targetEl.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      targetEl.removeEventListener("mousemove", onMouseMove);
      targetEl.removeEventListener("touchmove", onTouchMove);
    };
  }, [targetRef]);

  return (
    <div className="water-drop-overlay" aria-hidden>
      <div ref={dropRef} className="water-drop-lens" />
    </div>
  );
}
