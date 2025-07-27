import { useEffect, useRef, useState } from "react";

export function useThree(canvasRef: React.RefObject<HTMLCanvasElement>) {
  const [scene, setScene] = useState<any>(null);
  const [camera, setCamera] = useState<any>(null);
  const [renderer, setRenderer] = useState<any>(null);
  const animationCallbacks = useRef<Array<() => void>>([]);

  useEffect(() => {
    if (!canvasRef.current || !(window as any).THREE) {
      // Load Three.js dynamically
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      script.onload = () => {
        initThree();
      };
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    } else {
      initThree();
    }

    function initThree() {
      if (!canvasRef.current || !window) return;

      const THREE = (window as any).THREE;

      const newScene = new THREE.Scene();
      const newCamera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const newRenderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current!,
        alpha: true,
        antialias: true,
      });

      newRenderer.setSize(window.innerWidth, window.innerHeight);
      newRenderer.setClearColor(0x000000, 0);

      // Create camera with better positioning for full coverage
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 8);
    camera.lookAt(0, 0, 0);

      setScene(newScene);
      setCamera(camera);
      setRenderer(newRenderer);
    }

    // Handle window resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [canvasRef]);

  const animate = (callback: () => void) => {
    animationCallbacks.current.push(callback);

    if (animationCallbacks.current.length === 1) {
      const animationLoop = () => {
        requestAnimationFrame(animationLoop);

        animationCallbacks.current.forEach(cb => cb());

        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }
      };
      animationLoop();
    }
  };

  return { scene, camera, renderer, animate };
}