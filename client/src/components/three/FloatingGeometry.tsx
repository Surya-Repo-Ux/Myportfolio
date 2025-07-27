import { useEffect, useRef } from "react";

interface FloatingGeometryProps {
  scene: any;
  animate: (callback: () => void) => void;
}

export default function FloatingGeometry({ scene, animate }: FloatingGeometryProps) {
  const shapesRef = useRef<any[]>([]);

  useEffect(() => {
    if (!scene || !(window as any).THREE) return;

    const createGeometry = () => {
      const shapes = [];
      
      for (let i = 0; i < 15; i++) {
        const geometryType = Math.random();
        let geometry;
        
        if (geometryType < 0.33) {
          geometry = new (window as any).THREE.BoxGeometry(0.2, 0.2, 0.2);
        } else if (geometryType < 0.66) {
          geometry = new (window as any).THREE.SphereGeometry(0.1, 8, 8);
        } else {
          geometry = new (window as any).THREE.ConeGeometry(0.1, 0.3, 6);
        }
        
        const material = new (window as any).THREE.MeshBasicMaterial({
          color: new (window as any).THREE.Color().setHSL(
            0.5 + Math.random() * 0.3, 
            0.7, 
            0.5 + Math.random() * 0.3
          ),
          wireframe: true,
          transparent: true,
          opacity: 0.4
        });
        
        const mesh = new (window as any).THREE.Mesh(geometry, material);
        mesh.position.set(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 8
        );
        
        mesh.userData = {
          originalPosition: mesh.position.clone(),
          rotationSpeed: {
            x: (Math.random() - 0.5) * 0.02,
            y: (Math.random() - 0.5) * 0.02,
            z: (Math.random() - 0.5) * 0.02
          },
          floatSpeed: 0.5 + Math.random() * 1.5,
          floatOffset: Math.random() * Math.PI * 2
        };
        
        shapes.push(mesh);
        scene.add(mesh);
      }
      
      return shapes;
    };

    const shapes = createGeometry();
    shapesRef.current = shapes;

    const animationLoop = () => {
      const time = Date.now() * 0.001;
      
      shapes.forEach((shape, index) => {
        // Rotation
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        
        // Floating animation
        const floatY = Math.sin(time * shape.userData.floatSpeed + shape.userData.floatOffset) * 0.5;
        shape.position.y = shape.userData.originalPosition.y + floatY;
        
        // Subtle drift
        shape.position.x = shape.userData.originalPosition.x + Math.sin(time * 0.3 + index) * 0.2;
        shape.position.z = shape.userData.originalPosition.z + Math.cos(time * 0.2 + index) * 0.2;
      });
    };

    animate(animationLoop);

    return () => {
      shapes.forEach(shape => {
        scene.remove(shape);
        shape.geometry.dispose();
        shape.material.dispose();
      });
    };
  }, [scene, animate]);

  return null;
}
