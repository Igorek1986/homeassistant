const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const e = exposes.presets;

const device = {
    zigbeeModel: ['ZESP_Router','ZESP_Light_RGB'],
    model: 'Zesp Router New',
    vendor: 'VLK-SW',
    description: 'Xiaomi DGNWG05LM, ZHWG11LM gateways as router on Zesp',
    fromZigbee: [fz.on_off, fz.brightness, fz.ignore_basic_report, fz.color_colortemp],
    toZigbee: [tz.light_onoff_brightness, tz.ignore_transition, tz.ignore_rate, tz.effect, tz.light_brightness_move, tz.light_brightness_step, tz.light_colortemp, tz.light_colortemp_move, tz.light_colortemp_step, tz.light_hue_saturation_move, tz.light_hue_saturation_step, tz.light_color],
    exposes: [e.light_brightness_colortemp_colorxy()],
};

module.exports = device;