export const createParticleSystem = (scene: any, THREE: any) => {
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
  
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
  const material = new THREE.PointsMaterial({
    size: 0.02,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 0.8
  });
  
  const particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);
  
  return particleSystem;
};

export const createFloatingGeometry = (scene: any, THREE: any) => {
  const shapes = [];
  
  for (let i = 0; i < 10; i++) {
    const geometry = Math.random() > 0.5 
      ? new THREE.BoxGeometry(0.1, 0.1, 0.1)
      : new THREE.SphereGeometry(0.05, 8, 8);
    
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color().setHSL(0.5 + Math.random() * 0.2, 0.8, 0.6),
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    
    const mesh = new THREE.Mesh(geometry, material);
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

export const animateParticles = (particles: any) => {
  if (particles) {
    particles.rotation.x += 0.001;
    particles.rotation.y += 0.002;
  }
};

export const animateGeometry = (shapes: any[]) => {
  shapes.forEach((shape, index) => {
    shape.rotation.x += 0.01 * (index + 1);
    shape.rotation.y += 0.01 * (index + 1);
  });
};
