
import { useEffect, useRef } from "react";
import { useThree } from "@/hooks/use-three";

export default function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scene, camera, renderer, animate } = useThree(canvasRef);

  useEffect(() => {
    if (!scene || !camera || !renderer) return;

    // Enhanced particle system with full-screen coverage and vibrant colors
    const createParticles = () => {
      const particleCount = 4500;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      const velocities = new Float32Array(particleCount * 3);
      const originalColors = new Float32Array(particleCount * 3);
      
      for (let i = 0; i < particleCount * 3; i += 3) {
        // Create full-screen distribution with multiple patterns
        const pattern = Math.random();
        
        if (pattern < 0.3) {
          // Galaxy spiral pattern with more spread
          const radius = Math.random() * 35;
          const angle = Math.random() * Math.PI * 4;
          const height = (Math.random() - 0.5) * 25;
          positions[i] = Math.cos(angle) * radius + (Math.random() - 0.5) * 12;
          positions[i + 1] = height + Math.sin(angle * 2) * 5;
          positions[i + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 12;
        } else if (pattern < 0.6) {
          // Grid-like distribution for full coverage
          positions[i] = (Math.random() - 0.5) * 50;
          positions[i + 1] = (Math.random() - 0.5) * 35;
          positions[i + 2] = (Math.random() - 0.5) * 30;
        } else {
          // Random cloud distribution with depth
          positions[i] = (Math.random() - 0.5) * 60;
          positions[i + 1] = (Math.random() - 0.5) * 40;
          positions[i + 2] = (Math.random() - 0.5) * 35;
        }
        
        // Add more dynamic velocities
        velocities[i] = (Math.random() - 0.5) * 0.04;
        velocities[i + 1] = (Math.random() - 0.5) * 0.02;
        velocities[i + 2] = (Math.random() - 0.5) * 0.04;
        
        // Vibrant rainbow color palette
        const colorVariation = Math.random();
        let r, g, b;
        
        if (colorVariation < 0.15) {
          // Bright Electric Blue
          r = 0.1 + Math.random() * 0.2;
          g = 0.7 + Math.random() * 0.3;
          b = 1.0;
        } else if (colorVariation < 0.3) {
          // Neon Purple/Magenta
          r = 0.8 + Math.random() * 0.2;
          g = 0.1 + Math.random() * 0.3;
          b = 1.0;
        } else if (colorVariation < 0.45) {
          // Cyber Green/Lime
          r = 0.1 + Math.random() * 0.2;
          g = 1.0;
          b = 0.2 + Math.random() * 0.4;
        } else if (colorVariation < 0.6) {
          // Bright Orange/Red
          r = 1.0;
          g = 0.3 + Math.random() * 0.5;
          b = 0.1 + Math.random() * 0.2;
        } else if (colorVariation < 0.75) {
          // Golden Yellow
          r = 1.0;
          g = 0.8 + Math.random() * 0.2;
          b = 0.1 + Math.random() * 0.3;
        } else if (colorVariation < 0.9) {
          // Hot Pink
          r = 1.0;
          g = 0.1 + Math.random() * 0.3;
          b = 0.7 + Math.random() * 0.3;
        } else {
          // Cyan/Turquoise
          r = 0.1 + Math.random() * 0.2;
          g = 0.8 + Math.random() * 0.2;
          b = 0.9 + Math.random() * 0.1;
        }
        
        colors[i] = r;
        colors[i + 1] = g;
        colors[i + 2] = b;
        
        // Store original colors for pulsing
        originalColors[i] = r;
        originalColors[i + 1] = g;
        originalColors[i + 2] = b;
        
        sizes[i / 3] = Math.random() * 0.08 + 0.02;
      }
      
      const geometry = new (window as any).THREE.BufferGeometry();
      geometry.setAttribute('position', new (window as any).THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new (window as any).THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new (window as any).THREE.BufferAttribute(sizes, 1));
      geometry.userData = { velocities, originalColors };
      
      const material = new (window as any).THREE.PointsMaterial({
        size: 0.06,
        vertexColors: true,
        blending: (window as any).THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.95,
        sizeAttenuation: true,
        alphaTest: 0.05
      });
      
      const particleSystem = new (window as any).THREE.Points(geometry, material);
      scene.add(particleSystem);
      
      return particleSystem;
    };

    // Create flowing energy streams across full screen with vibrant colors
    const createEnergyStreams = () => {
      const streams = [];
      const streamColors = [
        { h: 0.6, s: 1.0, l: 0.7 }, // Cyan
        { h: 0.8, s: 1.0, l: 0.6 }, // Purple
        { h: 0.3, s: 1.0, l: 0.5 }, // Green
        { h: 0.1, s: 1.0, l: 0.6 }, // Orange
        { h: 0.9, s: 1.0, l: 0.7 }, // Pink
        { h: 0.15, s: 1.0, l: 0.6 }, // Yellow
        { h: 0.0, s: 1.0, l: 0.6 }, // Red
        { h: 0.5, s: 1.0, l: 0.8 }, // Light Blue
        { h: 0.7, s: 1.0, l: 0.5 }, // Deep Purple
        { h: 0.35, s: 1.0, l: 0.6 }  // Lime
      ];
      
      for (let i = 0; i < 10; i++) {
        const points = [];
        const streamLength = 100;
        
        for (let j = 0; j < streamLength; j++) {
          const t = j / streamLength;
          const x = Math.sin(t * Math.PI * 8 + i * 0.5) * 20 + (Math.random() - 0.5) * 15;
          const y = (t - 0.5) * 40 + Math.sin(t * Math.PI * 3) * 8;
          const z = Math.cos(t * Math.PI * 6 + i * 0.3) * 15 + (Math.random() - 0.5) * 10;
          points.push(new (window as any).THREE.Vector3(x, y, z));
        }
        
        const geometry = new (window as any).THREE.BufferGeometry().setFromPoints(points);
        const colorData = streamColors[i % streamColors.length];
        const material = new (window as any).THREE.LineBasicMaterial({
          color: new (window as any).THREE.Color().setHSL(colorData.h, colorData.s, colorData.l),
          transparent: true,
          opacity: 0.4 + Math.random() * 0.3,
          linewidth: 3
        });
        
        const stream = new (window as any).THREE.Line(geometry, material);
        stream.userData = { 
          originalColor: colorData,
          pulseSpeed: 2 + Math.random() * 3,
          rotationSpeed: 0.005 * (i + 1)
        };
        streams.push(stream);
        scene.add(stream);
      }
      
      return streams;
    };

    // Create pulsing geometric elements across full screen with rainbow colors
    const createPulsingGeometry = () => {
      const shapes = [];
      const rainbowColors = [
        { h: 0.0, s: 1.0, l: 0.6 },   // Red
        { h: 0.08, s: 1.0, l: 0.6 },  // Orange
        { h: 0.17, s: 1.0, l: 0.6 },  // Yellow
        { h: 0.33, s: 1.0, l: 0.5 },  // Green
        { h: 0.58, s: 1.0, l: 0.6 },  // Blue
        { h: 0.75, s: 1.0, l: 0.6 },  // Indigo
        { h: 0.83, s: 1.0, l: 0.6 },  // Violet
        { h: 0.92, s: 1.0, l: 0.7 },  // Pink
        { h: 0.5, s: 1.0, l: 0.8 },   // Cyan
        { h: 0.3, s: 1.0, l: 0.7 }    // Lime
      ];
      
      for (let i = 0; i < 25; i++) {
        const geometryType = Math.random();
        let geometry;
        
        if (geometryType < 0.25) {
          geometry = new (window as any).THREE.BoxGeometry(0.4, 0.4, 0.4);
        } else if (geometryType < 0.5) {
          geometry = new (window as any).THREE.SphereGeometry(0.2, 16, 16);
        } else if (geometryType < 0.75) {
          geometry = new (window as any).THREE.OctahedronGeometry(0.25);
        } else {
          geometry = new (window as any).THREE.TetrahedronGeometry(0.3);
        }
        
        const colorData = rainbowColors[i % rainbowColors.length];
        const material = new (window as any).THREE.MeshBasicMaterial({
          color: new (window as any).THREE.Color().setHSL(colorData.h, colorData.s, colorData.l),
          wireframe: true,
          transparent: true,
          opacity: 0.5 + Math.random() * 0.3
        });
        
        const mesh = new (window as any).THREE.Mesh(geometry, material);
        mesh.position.set(
          (Math.random() - 0.5) * 45,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 25
        );
        
        mesh.userData = {
          originalScale: mesh.scale.clone(),
          pulseSpeed: 1 + Math.random() * 3,
          pulseOffset: Math.random() * Math.PI * 2,
          rotationSpeed: {
            x: (Math.random() - 0.5) * 0.05,
            y: (Math.random() - 0.5) * 0.05,
            z: (Math.random() - 0.5) * 0.05
          },
          originalColor: colorData
        };
        
        shapes.push(mesh);
        scene.add(mesh);
      }
      
      return shapes;
    };

    const particles = createParticles();
    const streams = createEnergyStreams();
    const geometries = createPulsingGeometry();

    // Enhanced animation loop with vibrant interactive effects
    const animationLoop = () => {
      const time = Date.now() * 0.001;
      
      // Animate particles with flowing motion and color cycling
      if (particles) {
        particles.rotation.x += 0.001;
        particles.rotation.y += 0.002;
        
        const positions = particles.geometry.attributes.position.array;
        const colors = particles.geometry.attributes.color.array;
        const velocities = particles.geometry.userData.velocities;
        const originalColors = particles.geometry.userData.originalColors;
        
        for (let i = 0; i < positions.length; i += 3) {
          // Add flowing motion with wave effects
          positions[i] += velocities[i] + Math.sin(time * 0.5 + i * 0.01) * 0.001;
          positions[i + 1] += velocities[i + 1] + Math.sin(time + i * 0.02) * 0.003;
          positions[i + 2] += velocities[i + 2] + Math.cos(time * 0.7 + i * 0.015) * 0.001;
          
          // Boundary wrapping for full-screen coverage
          if (Math.abs(positions[i]) > 40) velocities[i] *= -1;
          if (Math.abs(positions[i + 1]) > 25) velocities[i + 1] *= -1;
          if (Math.abs(positions[i + 2]) > 35) velocities[i + 2] *= -1;
          
          // Enhanced color pulsing with rainbow cycling
          const pulse = Math.sin(time * 3 + i * 0.02) * 0.4 + 0.8;
          const colorShift = Math.sin(time * 0.5 + i * 0.005) * 0.3;
          
          colors[i] = (originalColors[i] + colorShift) * pulse;
          colors[i + 1] = (originalColors[i + 1] + Math.sin(colorShift + 2) * 0.2) * pulse;
          colors[i + 2] = (originalColors[i + 2] + Math.cos(colorShift + 4) * 0.2) * pulse;
          
          // Ensure colors stay within bounds
          colors[i] = Math.max(0, Math.min(1, colors[i]));
          colors[i + 1] = Math.max(0, Math.min(1, colors[i + 1]));
          colors[i + 2] = Math.max(0, Math.min(1, colors[i + 2]));
        }
        
        particles.geometry.attributes.position.needsUpdate = true;
        particles.geometry.attributes.color.needsUpdate = true;
      }
      
      // Animate energy streams with enhanced effects
      streams.forEach((stream, index) => {
        stream.rotation.z += stream.userData.rotationSpeed;
        stream.rotation.x += stream.userData.rotationSpeed * 0.3;
        stream.position.y = Math.sin(time * 0.7 + index) * 3;
        stream.position.x = Math.cos(time * 0.3 + index) * 1;
        
        // Enhanced color pulsing and shifting
        const colorData = stream.userData.originalColor;
        const hueShift = Math.sin(time * stream.userData.pulseSpeed + index) * 0.1;
        const brightnessShift = Math.sin(time * 2 + index) * 0.3 + 0.7;
        
        stream.material.color.setHSL(
          (colorData.h + hueShift) % 1,
          colorData.s,
          colorData.l * brightnessShift
        );
        
        // Dynamic opacity
        stream.material.opacity = 0.3 + Math.sin(time * 4 + index) * 0.3;
      });
      
      // Animate pulsing geometry with rainbow effects
      geometries.forEach((shape, index) => {
        // Enhanced rotation
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        
        // Dynamic pulsing scale effect
        const pulse = Math.sin(time * shape.userData.pulseSpeed + shape.userData.pulseOffset);
        const scale = 1 + pulse * 0.5;
        shape.scale.setScalar(scale);
        
        // Color cycling
        const colorData = shape.userData.originalColor;
        const hueShift = Math.sin(time * 1.5 + index * 0.5) * 0.2;
        const brightnessShift = Math.sin(time * 2.5 + index) * 0.4 + 0.8;
        
        shape.material.color.setHSL(
          (colorData.h + hueShift) % 1,
          colorData.s,
          colorData.l * brightnessShift
        );
        
        // Enhanced opacity pulsing
        shape.material.opacity = 0.4 + Math.abs(pulse) * 0.4;
        
        // Complex floating motion
        shape.position.y += Math.sin(time * 1.2 + index) * 0.005;
        shape.position.x += Math.cos(time * 0.8 + index) * 0.002;
        shape.position.z += Math.sin(time * 0.6 + index) * 0.003;
      });
    };

    animate(animationLoop);

    // Enhanced mouse interaction with color response
    let mouseX = 0;
    let mouseY = 0;
    let lastMouseTime = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const currentTime = Date.now() * 0.001;
      mouseX = (event.clientX - window.innerWidth / 2) / window.innerWidth;
      mouseY = (event.clientY - window.innerHeight / 2) / window.innerHeight;
      
      // Smooth camera movement with more responsiveness
      camera.position.x += (mouseX * 3 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 3 - camera.position.y) * 0.05;
      camera.position.z += (Math.abs(mouseX) + Math.abs(mouseY)) * 2;
      camera.lookAt(scene.position);
      
      // Enhanced particle interaction
      if (particles) {
        particles.rotation.x += mouseY * 0.001;
        particles.rotation.y += mouseX * 0.001;
        
        // Mouse movement affects particle colors
        const colors = particles.geometry.attributes.color.array;
        const mouseInfluence = Math.abs(mouseX) + Math.abs(mouseY);
        
        for (let i = 0; i < colors.length; i += 3) {
          const distance = Math.sqrt(
            Math.pow(particles.geometry.attributes.position.array[i], 2) +
            Math.pow(particles.geometry.attributes.position.array[i + 1], 2)
          ) * 0.01;
          
          const influence = Math.max(0, 1 - distance) * mouseInfluence * 2;
          colors[i] += influence * 0.3;
          colors[i + 1] += influence * 0.2;
          colors[i + 2] += influence * 0.4;
        }
        particles.geometry.attributes.color.needsUpdate = true;
      }
      
      // Affect energy streams
      streams.forEach((stream, index) => {
        stream.rotation.y += mouseX * 0.01;
        stream.position.z += mouseY * 0.5;
      });
      
      // Affect geometric shapes
      geometries.forEach((shape, index) => {
        const distance = shape.position.distanceTo(new (window as any).THREE.Vector3(mouseX * 10, mouseY * 10, 0));
        if (distance < 5) {
          shape.scale.setScalar(1.5 + mouseInfluence);
          shape.material.opacity = Math.min(1, shape.material.opacity + 0.3);
        }
      });
      
      lastMouseTime = currentTime;
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
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
}
