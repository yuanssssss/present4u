declare module 'current-device' {
  interface Device {
    type: string;
    orientation: string;
    mobile(): boolean;
    tablet(): boolean;
    desktop(): boolean;
    television(): boolean;
    portrait(): boolean;
    landscape(): boolean;
    ios(): boolean;
    ipad(): boolean;
    iphone(): boolean;
    ipod(): boolean;
    android(): boolean;
    androidPhone(): boolean;
    androidTablet(): boolean;
    blackberry(): boolean;
    blackberryPhone(): boolean;
    blackberryTablet(): boolean;
    windows(): boolean;
    windowsPhone(): boolean;
    windowsTablet(): boolean;
    fxos(): boolean;
    fxosPhone(): boolean;
    fxosTablet(): boolean;
    meego(): boolean;
    onChangeOrientation(callback: () => void): void;
    noConflict(): Device;
  }

  const device: Device;
  export default device;
}
