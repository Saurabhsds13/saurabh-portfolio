import { useEffect, useRef } from "react";

export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let columns = [];
    let mouse = { x: null, y: null };

    const chars = "01";
    const fontSize = 14;
    const trailLength = 12;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initColumns();
    };

    const initColumns = () => {
      const count = Math.floor(canvas.width / fontSize);
      columns = Array.from({ length: count }, () => {
        const trail = [];
        const startY = Math.random() * canvas.height;
        for (let t = 0; t < trailLength; t++) {
          trail.push({
            char: chars[Math.floor(Math.random() * 2)],
            y: startY - t * fontSize,
          });
        }
        return {
          trail,
          speed: Math.random() * 1.0 + 0.5,
          changeRate: Math.floor(Math.random() * 5) + 3,
          frameCount: 0,
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      columns.forEach((col, i) => {
        const x = i * fontSize;
        col.frameCount++;

        // Draw trail characters with fading opacity
        col.trail.forEach((cell, t) => {
          if (cell.y < 0 || cell.y > canvas.height) return;

          // Fade: head is bright, tail is dim
          const fade = 1 - t / trailLength;
          let opacity = fade * 0.5;
          let r = 99, g = 102, b = 241; // accent indigo

          // Mouse glow effect
          if (mouse.x !== null && mouse.y !== null) {
            const dx = x - mouse.x;
            const dy = cell.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140) {
              const boost = (140 - dist) / 140;
              r = 34; g = 211; b = 238; // cyan
              opacity = Math.min(fade * 0.5 + boost * 0.5, 0.9);
            }
          }

          // Head character is extra bright
          if (t === 0) {
            opacity = Math.min(opacity + 0.3, 0.95);
          }

          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          ctx.fillText(cell.char, x, cell.y);
        });

        // Move trail down
        col.trail.forEach((cell) => {
          cell.y += col.speed;
        });

        // Randomly change characters
        if (col.frameCount % col.changeRate === 0) {
          const idx = Math.floor(Math.random() * col.trail.length);
          col.trail[idx].char = chars[Math.floor(Math.random() * 2)];
        }

        // When head goes off screen, reset from top
        if (col.trail[0].y > canvas.height + fontSize) {
          const newStartY = -trailLength * fontSize;
          col.trail.forEach((cell, t) => {
            cell.y = newStartY + (trailLength - t) * fontSize;
            cell.char = chars[Math.floor(Math.random() * 2)];
          });
          col.speed = Math.random() * 1.0 + 0.5;
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    const handleMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
