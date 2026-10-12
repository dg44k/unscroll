import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface UnscrollPetCanvasProps {
  onPetClick?: () => void;
  accentColor?: string;
  isHappy?: boolean;
}

export const UnscrollPetCanvas: React.FC<UnscrollPetCanvasProps> = ({
  onPetClick,
  accentColor = '#18F870',
  isHappy = false
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const petGroupRef = useRef<THREE.Group | null>(null);
  const headGroupRef = useRef<THREE.Group | null>(null);
  const sproutGroupRef = useRef<THREE.Group | null>(null);
  const leftEyeRef = useRef<THREE.Mesh | null>(null);
  const rightEyeRef = useRef<THREE.Mesh | null>(null);
  const shadowMeshRef = useRef<THREE.Mesh | null>(null);

  const pointerPos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const jumpProgress = useRef(0);
  const isJumping = useRef(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 340;
    const height = container.clientHeight || 300;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 5.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff6ea, 1.4);
    dirLight.position.set(3, 5, 4);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0x00f0ff, 0.6);
    rimLight.position.set(-3, -2, -2);
    scene.add(rimLight);

    const budPointLight = new THREE.PointLight(new THREE.Color(accentColor), 1.2, 3);
    budPointLight.position.set(0, 1.4, 0);
    scene.add(budPointLight);

    const petRoot = new THREE.Group();
    petGroupRef.current = petRoot;
    scene.add(petRoot);

    const shadowGeo = new THREE.CircleGeometry(0.75, 32);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x473b6f,
      transparent: true,
      opacity: 0.18,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -1.25;
    scene.add(shadowMesh);
    shadowMeshRef.current = shadowMesh;

    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.45,
      metalness: 0.05,
    });

    const darkPandaMat = new THREE.MeshStandardMaterial({
      color: 0x1e1a34,
      roughness: 0.55,
      metalness: 0.05,
    });

    const pinkBlushMat = new THREE.MeshStandardMaterial({
      color: 0xff4d94,
      roughness: 0.6,
    });

    const bodyGeo = new THREE.SphereGeometry(0.85, 32, 24);
    bodyGeo.scale(1, 0.95, 0.9);
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    bodyMesh.position.y = -0.4;
    petRoot.add(bodyMesh);

    const tummyGeo = new THREE.SphereGeometry(0.65, 24, 20);
    tummyGeo.scale(0.85, 0.9, 0.35);
    const tummyMat = new THREE.MeshStandardMaterial({
      color: 0xf4f7ff,
      roughness: 0.5,
    });
    const tummyMesh = new THREE.Mesh(tummyGeo, tummyMat);
    tummyMesh.position.set(0, -0.42, 0.68);
    petRoot.add(tummyMesh);

    const armGeo = new THREE.SphereGeometry(0.32, 16, 16);
    armGeo.scale(0.7, 1.2, 0.7);
    const leftArm = new THREE.Mesh(armGeo, darkPandaMat);
    leftArm.position.set(-0.75, -0.35, 0.15);
    leftArm.rotation.z = 0.35;
    leftArm.rotation.x = -0.2;
    petRoot.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, darkPandaMat);
    rightArm.position.set(0.75, -0.35, 0.15);
    rightArm.rotation.z = -0.35;
    rightArm.rotation.x = -0.2;
    petRoot.add(rightArm);

    const footGeo = new THREE.SphereGeometry(0.3, 16, 16);
    footGeo.scale(1, 0.65, 1.2);
    const leftFoot = new THREE.Mesh(footGeo, darkPandaMat);
    leftFoot.position.set(-0.45, -1.05, 0.3);
    petRoot.add(leftFoot);

    const rightFoot = new THREE.Mesh(footGeo, darkPandaMat);
    rightFoot.position.set(0.45, -1.05, 0.3);
    petRoot.add(rightFoot);

    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.35, 0);
    petRoot.add(headGroup);
    headGroupRef.current = headGroup;

    const headGeo = new THREE.SphereGeometry(0.78, 32, 24);
    headGeo.scale(1.05, 0.96, 0.95);
    const headMesh = new THREE.Mesh(headGeo, bodyMat);
    headGroup.add(headMesh);

    const earGeo = new THREE.SphereGeometry(0.3, 20, 16);
    earGeo.scale(0.9, 0.9, 0.55);
    const leftEar = new THREE.Mesh(earGeo, darkPandaMat);
    leftEar.position.set(-0.62, 0.65, -0.05);
    leftEar.rotation.z = 0.35;
    headGroup.add(leftEar);

    const rightEar = new THREE.Mesh(earGeo, darkPandaMat);
    rightEar.position.set(0.62, 0.65, -0.05);
    rightEar.rotation.z = -0.35;
    headGroup.add(rightEar);

    const innerEarGeo = new THREE.SphereGeometry(0.18, 16, 12);
    innerEarGeo.scale(0.8, 0.8, 0.3);
    const leftInnerEar = new THREE.Mesh(innerEarGeo, pinkBlushMat);
    leftInnerEar.position.set(-0.6, 0.65, 0.1);
    leftInnerEar.rotation.z = 0.35;
    headGroup.add(leftInnerEar);

    const rightInnerEar = new THREE.Mesh(innerEarGeo, pinkBlushMat);
    rightInnerEar.position.set(0.6, 0.65, 0.1);
    rightInnerEar.rotation.z = -0.35;
    headGroup.add(rightInnerEar);

    const eyePatchGeo = new THREE.SphereGeometry(0.24, 16, 16);
    eyePatchGeo.scale(1, 1.2, 0.4);
    const leftPatch = new THREE.Mesh(eyePatchGeo, darkPandaMat);
    leftPatch.position.set(-0.35, 0.05, 0.68);
    leftPatch.rotation.z = -0.25;
    headGroup.add(leftPatch);

    const rightPatch = new THREE.Mesh(eyePatchGeo, darkPandaMat);
    rightPatch.position.set(0.35, 0.05, 0.68);
    rightPatch.rotation.z = 0.25;
    headGroup.add(rightPatch);

    const pupilGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const pupilMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
    });
    const leftPupil = new THREE.Mesh(pupilGeo, pupilMat);
    leftPupil.position.set(-0.35, 0.06, 0.77);
    headGroup.add(leftPupil);
    leftEyeRef.current = leftPupil;

    const rightPupil = new THREE.Mesh(pupilGeo, pupilMat);
    rightPupil.position.set(0.35, 0.06, 0.77);
    headGroup.add(rightPupil);
    rightEyeRef.current = rightPupil;

    const cheekGeo = new THREE.SphereGeometry(0.13, 16, 12);
    cheekGeo.scale(1.2, 0.75, 0.3);
    const leftCheek = new THREE.Mesh(cheekGeo, pinkBlushMat);
    leftCheek.position.set(-0.54, -0.16, 0.63);
    headGroup.add(leftCheek);

    const rightCheek = new THREE.Mesh(cheekGeo, pinkBlushMat);
    rightCheek.position.set(0.54, -0.16, 0.63);
    headGroup.add(rightCheek);

    const noseGeo = new THREE.SphereGeometry(0.065, 12, 12);
    noseGeo.scale(1.2, 0.8, 0.6);
    const noseMesh = new THREE.Mesh(noseGeo, darkPandaMat);
    noseMesh.position.set(0, -0.06, 0.78);
    headGroup.add(noseMesh);

    const sproutGroup = new THREE.Group();
    sproutGroup.position.set(0, 0.72, 0);
    headGroup.add(sproutGroup);
    sproutGroupRef.current = sproutGroup;

    const stemCurve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0.18, 0.02),
      new THREE.Vector3(0.04, 0.32, 0.03),
      new THREE.Vector3(0, 0.44, 0)
    );
    const stemGeo = new THREE.TubeGeometry(stemCurve, 20, 0.035, 12, false);
    const sproutMat = new THREE.MeshStandardMaterial({
      color: 0x18f870,
      roughness: 0.35,
    });
    const stemMesh = new THREE.Mesh(stemGeo, sproutMat);
    sproutGroup.add(stemMesh);

    const leafGeo = new THREE.SphereGeometry(0.24, 16, 12);
    leafGeo.scale(1.4, 0.3, 0.65);
    const leftLeaf = new THREE.Mesh(leafGeo, sproutMat);
    leftLeaf.position.set(-0.24, 0.35, 0);
    leftLeaf.rotation.z = 0.55;
    leftLeaf.rotation.y = 0.2;
    sproutGroup.add(leftLeaf);

    const rightLeaf = new THREE.Mesh(leafGeo, sproutMat);
    rightLeaf.position.set(0.24, 0.35, 0);
    rightLeaf.rotation.z = -0.55;
    rightLeaf.rotation.y = -0.2;
    sproutGroup.add(rightLeaf);

    const budGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const budMat = new THREE.MeshStandardMaterial({
      color: 0x18f870,
      emissive: 0x18f870,
      emissiveIntensity: 0.95,
      roughness: 0.2,
    });
    const budMesh = new THREE.Mesh(budGeo, budMat);
    budMesh.position.set(0, 0.44, 0);
    sproutGroup.add(budMesh);

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      pointerPos.current.targetX = Math.max(-1, Math.min(1, x));
      pointerPos.current.targetY = Math.max(-1, Math.min(1, y));
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = container.getBoundingClientRect();
      const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
      pointerPos.current.targetX = Math.max(-1, Math.min(1, x));
      pointerPos.current.targetY = Math.max(-1, Math.min(1, y));
    };

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 340;
      const h = container.clientHeight || 300;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('resize', handleResize);

    let clock = new THREE.Clock();

    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      pointerPos.current.x += (pointerPos.current.targetX - pointerPos.current.x) * 0.08;
      pointerPos.current.y += (pointerPos.current.targetY - pointerPos.current.y) * 0.08;

      const px = pointerPos.current.x;
      const py = pointerPos.current.y;

      if (headGroupRef.current) {
        headGroupRef.current.rotation.y = px * 0.45;
        headGroupRef.current.rotation.x = -py * 0.35;
      }

      if (leftEyeRef.current && rightEyeRef.current) {
        const eyeShiftX = px * 0.04;
        const eyeShiftY = py * 0.035;
        leftEyeRef.current.position.x = -0.35 + eyeShiftX;
        leftEyeRef.current.position.y = 0.06 + eyeShiftY;
        rightEyeRef.current.position.x = 0.35 + eyeShiftX;
        rightEyeRef.current.position.y = 0.06 + eyeShiftY;
      }

      if (sproutGroupRef.current) {
        const sway = Math.sin(elapsed * 2.8) * 0.08;
        sproutGroupRef.current.rotation.z = sway - px * 0.15;
        sproutGroupRef.current.rotation.x = Math.cos(elapsed * 2.2) * 0.05 + py * 0.1;
      }

      if (petGroupRef.current) {
        const breath = Math.sin(elapsed * 2.2) * 0.02;
        let jumpY = 0;
        let squashY = 1;
        let squashXZ = 1;

        if (isJumping.current) {
          jumpProgress.current += 0.055;
          const jp = jumpProgress.current;
          if (jp <= 1) {
            jumpY = Math.sin(jp * Math.PI) * 0.55;
            squashY = 1 + Math.sin(jp * Math.PI * 2) * 0.12;
            squashXZ = 1 - Math.sin(jp * Math.PI * 2) * 0.08;
          } else {
            isJumping.current = false;
            jumpProgress.current = 0;
          }
        }

        petGroupRef.current.position.y = jumpY + breath;
        petGroupRef.current.scale.set(squashXZ, squashY + breath, squashXZ);
        petGroupRef.current.rotation.y = px * 0.15;

        if (shadowMeshRef.current) {
          const sScale = Math.max(0.4, 1 - jumpY * 0.8);
          shadowMeshRef.current.scale.set(sScale, sScale, 1);
          shadowMesh.material.opacity = 0.18 * sScale;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [accentColor]);

  const handleClick = () => {
    isJumping.current = true;
    jumpProgress.current = 0;
    if (onPetClick) onPetClick();
  };

  return (
    <div
      ref={mountRef}
      onClick={handleClick}
      className="w-full h-full cursor-pointer relative select-none"
      title="Нажмите на питомца, чтобы погладить!"
    />
  );
};
