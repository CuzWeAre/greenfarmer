// src/types/components.d.ts
import CyjSwiper from './CyjSwiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    CyjSwiper: typeof CyjSwiper
  }
}