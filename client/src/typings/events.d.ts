declare module "vue-context";

interface InputEvent extends InputEvent {
  code?: string;
  keyCode?: number;
  target: {
    value: string;
    id?: string;
    getAttribute?: (attr: string) => string;
  };
}

interface Event extends Event {
  which?: number;
  keyCode?: number;
}

interface Element extends Element {
  focus?: () => void;
  clip?: () => HTMLCanvasElement | undefined;
}

interface Error extends Error {
  unauthorized?: boolean;
}

interface HTMLElement extends HTMLElement {
  value?: string | number;
  _prevClass?: string;
}
