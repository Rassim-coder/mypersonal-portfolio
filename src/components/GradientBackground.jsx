import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export function GradientBackground() {
  return (
    <ShaderGradientCanvas
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
      pixelDensity={1}
      fov={45}
    >
      <ShaderGradient
        animate="on"
        axesHelper="off"
        bgColor1="#000000"
        bgColor2="#000000"
        brightness={1.2}
        cAzimuthAngle={170}
        cDistance={2.19}
        cPolarAngle={70}
        cameraZoom={1}
        color1="#0f1418"
        color2="#1a3c3a"
        color3="#20b2a6"   
        destination="onCanvas"
        embedMode="off"
        envPreset="city"
        frameRate={10}
        gizmoHelper="hide"
        grain="off"
        lightType="3d"
        positionX={0}
        positionY={0.9}
        positionZ={-0.3}
        reflection={0.1}
        rotationX={45}
        shader="defaults"
        type="waterPlane"
        uAmplitude={0}
        uDensity={1.2}
        uFrequency={0}
        uSpeed={0.2}
        uStrength={3.4}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  );
}