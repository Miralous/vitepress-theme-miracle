export interface StyleInfo {
  color: {
    hue: number
    global: boolean
  }
  visual: {
    transition: number // x[s(second(s))] / 100 | e.g. 10 -> 0.1s (default)
    gap: number // x[px]
    radius: number // x[px]
    transparent: boolean // transparent? (for year & artist)
    gfmTitle: boolean
    upperCategory: boolean // CATEGORIES / Categories
    mono: boolean // use monospace font for title
    cardHover: {
      enabled: boolean // enable card hover effect
      scale: number
      maxMove: number
      maxRotate: number // 3d effect |  set 0 to disable 3D
      easing: number
    }
  }
}
