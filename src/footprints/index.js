import alps from './alps'
import button from './button'
import choc from './choc'
import chocmini from './chocmini'
import diode from './diode'
import jstph from './jstph'
import jumper from './jumper'
import mx from './mx'
import oled from './oled'
import omron from './omron'
import pad from './pad'
import promicro from './promicro'
import rgb from './rgb'
import rotary from './rotary'
import scrollwheel from './scrollwheel'
import slider from './slider'
import trrs from './trrs'
import via from './via'

let footprint_types = {
    alps,
    button,
    choc,
    chocmini,
    diode,
    jstph,
    jumper,
    mx,
    oled,
    omron,
    pad,
    promicro,
    rgb,
    rotary,
    scrollwheel,
    slider,
    trrs,
    via,
}

export const inject_footprint = (name, fp) => {
    footprint_types[name] = fp
}

export { footprint_types }