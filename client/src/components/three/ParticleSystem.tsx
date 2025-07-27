
import { useEffect, useRef } from "react";
import { useThree } from "@/hooks/use-three";

export default function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scene, camera, renderer, animate } = useThree(canvasRef);

  useEffect(() => {
    if (!scene || !camera || !renderer) return;

    // Enhanced particle system with video-like effects
    const createParticles = () => {
      const particleCount = 2000;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      const velocities = new Float32Array(particleCount * 3);
      
      for (let i = 0; i < particleCount * 3; i += 3) {
        // Create flowing galaxy pattern
        const radius = Math.random() * 20;
        const angle = Math.random() * Math.PI * 2;
        const height = (Math.random() - 0.5) * 15;
        
        positions[i] = Math.cos(angle) * radius + (Math.random() - 0.5) * 5;
        positions[i + 1] = height;
        positions[i + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 5;
        
        // Add velocities for flowing motion
        velocities[i] = (Math.random() - 0.5) * 0.02;
        velocities[i + 1] = (Math.random() - 0.5) * 0.01;
        velocities[i + 2] = (Math.random() - 0.5) * 0.02;
        
        // Dynamic color palette with pulsing effects
        const colorVariation = Math.random();
        if (colorVariation < 0.25) {
          // Electric Blue
          colors[i] = 0.0;
          colors[i + 1] = 0.6 + Math.random() * 0.4;
          colors[i + 2] = 1.0;
        } else if (colorVariation < 0.5) {
          // Neon Purple
          colors[i] = 0.6 + Math.random() * 0.4;
          colors[i + 1] = 0.1;
          colors[i + 2] = 1.0;
        } else if (colorVariation < 0.75) {
          // Cyber Green
          colors[i] = 0.0;
          colors[i + 1] = 1.0;
          colors[i + 2] = 0.3 + Math.random() * 0.3;
        } else {
          // Gold Accent
          colors[i] = 1.0;
          colors[i + 1] = 0.7 + Math.random() * 0.3;
          colors[i + 2] = 0.1;
        }
        
        sizes[i / 3] = Math.random() * 0.05 + 0.01;
      }
      
      const geometry = new (window as any).THREE.BufferGeometry();
      geometry.setAttribute('position', new (window as any).THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new (window as any).THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new (window as any).THREE.BufferAttribute(sizes, 1));
      geometry.userData = { velocities };
      
      const material = new (window as any).THREE.PointsMaterial({
        size: 0.03,
        vertexColors: true,
        blending: (window as any).THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
      });
      
      const particleSystem = new (window as any).THREE.Points(geometry, material);
      scene.add(particleSystem);
      
      return particleSystem;
    };

    // Create flowing energy streams
    const createEnergyStreams = () => {
      const streams = [];
      
      for (let i = 0; i < 5; i++) {
        const points = [];
        const streamLength = 50;
        
        for (let j = 0; j < streamLength; j++) {
          const t = j / streamLength;
          const x = Math.sin(t * Math.PI * 4 + i) * 8;
          const y = (t - 0.5) * 20;
          const z = Math.cos(t * Math.PI * 3 + i) * 6;
          points.push(new (window as any).THREE.Vector3(x, y, z));
        }
        
        const geometry = new (window as any).THREE.BufferGeometry().setFromPoints(points);
        const material = new (window as any).THREE.LineBasicMaterial({
          color: new (window as any).THREE.Color().setHSL(0.5 + i * 0.1, 0.8, 0.6),
          transparent: true,
          opacity: 0.3,
          linewidth: 2
        });
        
        const stream = new (window as any).THREE.Line(geometry, material);
        streams.push(stream);
        scene.add(stream);
      }
      
      return streams;
    };

    // Create pulsing geometric elements
    const createPulsingGeometry = () => {
      const shapes = [];
      
      for (let i = 0; i < 12; i++) {
        const geometryType = Math.random();
        let geometry;
        
        if (geometryType < 0.4) {
          geometry = new (window as any).THREE.BoxGeometry(0.3, 0.3, 0.3);
        } else if (geometryType < 0.7) {
          geometry = new (window as any).THREE.SphereGeometry(0.15, 12, 12);
        } else {
          geometry = new (window as any).THREE.OctahedronGeometry(0.2);
        }
        
        const material = new (window as any).THREE.MeshBasicMaterial({
          color: new (window as any).THREE.Color().setHSL(
            0.5 + Math.random() * 0.4, 
            0.8, 
            0.5 + Math.random() * 0.3
          ),
          wireframe: true,
          transparent: true,
          opacity: 0.4
        });
        
        const mesh = new (window as any).THREE.Mesh(geometry, material);
        mesh.position.set(
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 10
        );
        
        mesh.userData = {
          originalScale: mesh.scale.clone(),
          pulseSpeed: 0.5 + Math.random() * 2,
          pulseOffset: Math.random() * Math.PI * 2,
          rotationSpeed: {
            x: (Math.random() - 0.5) * 0.03,
            y: (Math.random() - 0.5) * 0.03,
            z: (Math.random() - 0.5) * 0.03
          }
        };
        
        shapes.push(mesh);
        scene.add(mesh);
      }
      
      return shapes;
    };

    const particles = createParticles();
    const streams = createEnergyStreams();
    const geometries = createPulsingGeometry();

    // Enhanced animation loop with video-like effects
    const animationLoop = () => {
      const time = Date.now() * 0.001;
      
      // Animate particles with flowing motion
      if (particles) {
        particles.rotation.x += 0.0008;
        particles.rotation.y += 0.0015;
        
        const positions = particles.geometry.attributes.position.array;
        const colors = particles.geometry.attributes.color.array;
        const velocities = particles.geometry.userData.velocities;
        
        for (let i = 0; i < positions.length; i += 3) {
          // Add flowing motion
          positions[i] += velocities[i];
          positions[i + 1] += velocities[i + 1] + Math.sin(time + i * 0.01) * 0.002;
          positions[i + 2] += velocities[i + 2];
          
          // Boundary wrapping
          if (Math.abs(positions[i]) > 25) velocities[i] *= -1;
          if (Math.abs(positions[i + 1]) > 15) velocities[i + 1] *= -1;
          if (Math.abs(positions[i + 2]) > 25) velocities[i + 2] *= -1;
          
          // Color pulsing effect
          const pulse = Math.sin(time * 2 + i * 0.01) * 0.3 + 0.7;
          colors[i] *= pulse;
          colors[i + 1] *= pulse;
          colors[i + 2] *= pulse;
        }
        
        particles.geometry.attributes.position.needsUpdate = true;
        particles.geometry.attributes.color.needsUpdate = true;
      }
      
      // Animate energy streams
      streams.forEach((stream, index) => {
        stream.rotation.z += 0.005 * (index + 1);
        stream.position.y = Math.sin(time * 0.5 + index) * 2;
        
        // Opacity pulsing
        stream.material.opacity = 0.2 + Math.sin(time * 3 + index) * 0.2;
      });
      
      // Animate pulsing geometry
      geometries.forEach((shape, index) => {
        // Rotation
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        
        // Pulsing scale effect
        const pulse = Math.sin(time * shape.userData.pulseSpeed + shape.userData.pulseOffset);
        const scale = 1 + pulse * 0.3;
        shape.scale.setScalar(scale);
        
        // Opacity pulsing
        shape.material.opacity = 0.3 + Math.abs(pulse) * 0.3;
        
        // Floating motion
        shape.position.y += Math.sin(time * 0.8 + index) * 0.003;
      });
    };

    animate(animationLoop);

    // Enhanced mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) / window.innerWidth;
      mouseY = (event.clientY - window.innerHeight / 2) / window.innerHeight;
      
      // Smooth camera movement
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);
      
      // Affect particle movement based on mouse
      if (particles) {
        particles.rotation.x += mouseY * 0.0005;
        particles.rotation.y += mouseX * 0.0005;
      }
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
