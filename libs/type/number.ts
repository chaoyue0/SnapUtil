import { reLessZero, reOverZero, reZero } from '../regular/general';
import { isBaseType } from './common';

export const NAN: number = 0 / 0;

export const isZero = (val: unknown): val is string | number => {
  if (isBaseType(val)) {
    if (typeof val === 'string') {
      return reZero.test(val);
    }
    if (typeof val === 'number') {
      return val === 0 || reZero.test(val.toString());
    }
  }
  return false;
};

export const isLessZero = (val: unknown): val is string | number => {
  if (isBaseType(val)) {
    if (typeof val === 'string') {
      return reLessZero.test(val);
    }
    if (typeof val === 'number') {
      return val < 0;
    }
  }
  return false;
};

export const isOverZero = (val: unknown): val is string | number => {
  if (isBaseType(val)) {
    if (typeof val === 'string') {
      return reOverZero.test(val);
    }
    if (typeof val === 'number') {
      return val > 0;
    }
  }
  return false;
};

export const clamp = (number: number | string,lower: number | string,upper: number | string): number => {
  number = +number;
  lower = +lower;
  upper = +upper;
  lower = lower === lower ? lower : 0;
  upper = upper === upper ? upper : 0;
  if (number === number) {
    number = number <= upper ? number : upper;
    number = number >= lower ? number : lower;
  }
  return number;
}