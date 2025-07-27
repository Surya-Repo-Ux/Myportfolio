import { useEffect, useRef } from "react";
import { useThree } from "@/hooks/use-three";

export default function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scene, camera, renderer, animate } = useThree(canvasRef);

  useEffect(() => {
    if (!scene || !camera || !renderer) return;

    // Create particle system
    const createParticles = () => {
      const particleCount = 1000;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 20;
        positions[i + 1] = (Math.random() - 0.5) * 20;
        positions[i + 2] = (Math.random() - 0.5) * 20;
        
        colors[i] = Math.random() * 0.5 + 0.5;
        colors[i + 1] = Math.random() * 0.5 + 0.8;
        colors[i + 2] = 1;
      }
      
      const geometry = new (window as any).THREE.BufferGeometry();
      geometry.setAttribute('position', new (window as any).THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new (window as any).THREE.BufferAttribute(colors, 3));
      
      const material = new (window as any).THREE.PointsMaterial({
        size: 0.02,
        vertexColors: true,
        blending: (window as any).THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.8
      });
      
      const particleSystem = new (window as any).THREE.Points(geometry, material);
      scene.add(particleSystem);
      
      return particleSystem;
    };

    // Create floating geometric shapes
    const createFloatingGeometry = () => {
      const shapes = [];
      
      for (let i = 0; i < 10; i++) {
        const geometry = Math.random() > 0.5 
          ? new (window as any).THREE.BoxGeometry(0.1, 0.1, 0.1)
          : new (window as any).THREE.SphereGeometry(0.05, 8, 8);
        
        const material = new (window as any).THREE.MeshBasicMaterial({
          color: new (window as any).THREE.Color().setHSL(0.5 + Math.random() * 0.2, 0.8, 0.6),
          wireframe: true,
          transparent: true,
          opacity: 0.3
        });
        
        const mesh = new (window as any).THREE.Mesh(geometry, material);
        mesh.position.set(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5
        );
        
        shapes.push(mesh);
        scene.add(mesh);
      }
      
      return shapes;
    };

    const particles = createParticles();
    const geometries = createFloatingGeometry();

    // Animation loop
    const animationLoop = () => {
      if (particles) {
        particles.rotation.x += 0.001;
        particles.rotation.y += 0.002;
      }
      
      geometries.forEach((shape, index) => {
        shape.rotation.x += 0.01 * (index + 1);
        shape.rotation.y += 0.01 * (index + 1);
      });
    };

    animate(animationLoop);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - window.innerWidth / 2;
      mouseY = event.clientY - window.innerHeight / 2;
      
      camera.position.x += (mouseX * 0.001 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.001 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [scene, camera, renderer, animate]);

  return (
    <canvas
      ref={canvasRef}
      id="three-canvas"
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
