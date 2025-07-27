import { useEffect, useRef } from "react";
import { useThree } from "@/hooks/use-three";

export default function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scene, camera, renderer, animate } = useThree(canvasRef);

  useEffect(() => {
    if (!scene || !camera || !renderer) return;

    // Create enhanced particle system
    const createParticles = () => {
      const particleCount = 1500;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      
      for (let i = 0; i < particleCount * 3; i += 3) {
        // Create spiral galaxy pattern
        const radius = Math.random() * 15;
        const angle = Math.random() * Math.PI * 2;
        const height = (Math.random() - 0.5) * 10;
        
        positions[i] = Math.cos(angle) * radius + (Math.random() - 0.5) * 2;
        positions[i + 1] = height;
        positions[i + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 2;
        
        // Enhanced color palette
        const colorVariation = Math.random();
        if (colorVariation < 0.3) {
          // Cyan
          colors[i] = 0.0;
          colors[i + 1] = 0.8 + Math.random() * 0.2;
          colors[i + 2] = 1.0;
        } else if (colorVariation < 0.6) {
          // Purple
          colors[i] = 0.5 + Math.random() * 0.3;
          colors[i + 1] = 0.2;
          colors[i + 2] = 1.0;
        } else {
          // Gold
          colors[i] = 1.0;
          colors[i + 1] = 0.8 + Math.random() * 0.2;
          colors[i + 2] = 0.2;
        }
        
        sizes[i / 3] = Math.random() * 0.03 + 0.01;
      }
      
      const geometry = new (window as any).THREE.BufferGeometry();
      geometry.setAttribute('position', new (window as any).THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new (window as any).THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new (window as any).THREE.BufferAttribute(sizes, 1));
      
      const material = new (window as any).THREE.PointsMaterial({
        size: 0.025,
        vertexColors: true,
        blending: (window as any).THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: true
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

    // Enhanced animation loop
    const animationLoop = () => {
      const time = Date.now() * 0.001;
      
      if (particles) {
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.001;
        
        // Add wave motion to particles
        const positions = particles.geometry.attributes.position.array;
        for (let i = 1; i < positions.length; i += 3) {
          positions[i] += Math.sin(time + positions[i * 0.01]) * 0.001;
        }
        particles.geometry.attributes.position.needsUpdate = true;
      }
      
      geometries.forEach((shape, index) => {
        shape.rotation.x += 0.005 * (index + 1);
        shape.rotation.y += 0.008 * (index + 1);
        shape.rotation.z += 0.003 * (index + 1);
        
        // Add floating animation
        shape.position.y += Math.sin(time * 0.5 + index) * 0.002;
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
