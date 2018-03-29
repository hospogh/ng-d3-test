import APP_CONFIG from '../../app.config';

export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
  value: string | number;

  id: number;
  linkCount = 0;

  constructor(id, value) {
    this.id = id;
    this.value = value;
  }

  normal = () => {
    return Math.sqrt(this.linkCount / APP_CONFIG.COUNT);
  };

  get r() {
    return 50 * this.normal() + 10;
  }

  get fontSize() {
    return 50;
  }

  get color() {
    const index = Math.floor(APP_CONFIG.SPECTRUM.length * this.normal() + 4);
    return APP_CONFIG.SPECTRUM[index];
  }
}
