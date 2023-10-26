<template>
  <div class="scene">
    <div class="cube" :style="cubeStyle" @mousedown="startDrag" @mousemove="rotateCube" @mouseup="stopDrag">
      <CubeFace faceClass="front">
        <slot name="front"></slot>
      </CubeFace>
      <CubeFace faceClass="back">
        <slot name="back"></slot>
      </CubeFace>
      <CubeFace faceClass="left">
        <slot name="left"></slot>
      </CubeFace>
      <CubeFace faceClass="right">
        <slot name="right"></slot>
      </CubeFace>
      <CubeFace faceClass="top">
        <slot name="top"></slot>
      </CubeFace>
      <CubeFace faceClass="bottom">
        <slot name="bottom"></slot>
      </CubeFace>
    </div>
    <div class="my-24 flex flex-wrap gap-4">
      <button @click="rotate('X', 90)" :class="buttonClass(rotationAxes.upDown === 'X')">Rotate X</button>
      <button @click="rotate('X', -90)" :class="buttonClass(rotationAxes.upDown === 'X')">Rotate -X</button>
      <button @click="rotate('Y', 90)" :class="buttonClass(rotationAxes.leftRight === 'Y')">Rotate Y</button>
      <button @click="rotate('Y', -90)" :class="buttonClass(rotationAxes.leftRight === 'Y')">Rotate -Y</button>
      <button @click="rotate('Z', 90)" :class="buttonClass(rotationAxes.leftRight === 'Z')">Rotate Z</button>
      <button @click="rotate('Z', -90)" :class="buttonClass(rotationAxes.leftRight === 'Z')">Rotate -Z</button>
    </div>
  </div>
</template>

<script>
import './xyzCube.css';
import CubeFace from './cubeFace.vue';

export default {
  name: 'xyzCube',
  components: {
    CubeFace,
  },
  data() {
    return {
      dragging: false,
      lastX: 0,
      lastY: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  computed: {
    cubeStyle() {
      return {
        transform: `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
      };
    },
    currentFace() {
      const normalizedX = Math.round(this.rotateX / 90) % 4;
      const normalizedY = Math.round(this.rotateY / 90) % 4;

      if (normalizedX === 0) {
        if (normalizedY === 0 || normalizedY === 2 || normalizedY === -2) return 'front';
        if (normalizedY === 1 || normalizedY === -3) return 'right';
        if (normalizedY === -1 || normalizedY === 3) return 'left';
      }

      if (normalizedX === 2 || normalizedX === -2) return 'back';

      if (normalizedX === 1 || normalizedX === -3) return 'bottom';
      if (normalizedX === 3 || normalizedX === -1) return 'top';

      return 'unknown';
    },
    rotationAxes() {
      switch (this.currentFace) {
        case 'front':
        case 'back':
          return { upDown: 'X', leftRight: 'Y' };
        case 'left':
        case 'right':
          return { upDown: 'X', leftRight: 'Y' };
        case 'top':
        case 'bottom':
          return { upDown: 'X', leftRight: 'Z' };
        default:
          return { upDown: 'X', leftRight: 'Y' };
      }
    },
  },
  methods: {
    buttonClass(isActive) {
      return [
        'text-accent',
        'px-2',
        'py-1',
        'rounded-3xl',
        'text-center',
        'cursor-pointer',
        'hover:bg-opacity-80',
        'text-lg',
        isActive ? 'bg-secondary' : 'bg-gray-500',
      ].join(' ');
    },
    startDrag(event) {
      this.dragging = true;
      this.lastX = event.clientX;
      this.lastY = event.clientY;
    },
    stopDrag() {
      this.dragging = false;

      this.rotateX = Math.round(this.rotateX / 90) * 90;
      this.rotateY = Math.round(this.rotateY / 90) * 90;
      this.rotateZ = Math.round(this.rotateZ / 90) * 90;
    },
    rotateCube(event) {
      if (!this.dragging) return;

      const deltaX = event.clientX - this.lastX;
      const deltaY = event.clientY - this.lastY;

      this[`rotate${this.rotationAxes.upDown}`] -= deltaY;
      this[`rotate${this.rotationAxes.leftRight}`] += deltaX;

      this.lastX = event.clientX;
      this.lastY = event.clientY;
    },
    rotate(axis, angle) {
      this[`rotate${axis}`] += angle;
    },
  },
};
</script>
