import { Injectable } from '../../common';

import { CONTROLLER_METADATA } from '../helpers';
import { ClassConstructor, ControllerOptions } from '../types';

export function Controller(url = '', options?: ControllerOptions) {
  return (target: ClassConstructor) => {
    Reflect.defineMetadata(CONTROLLER_METADATA, { options, url }, target);

    Injectable()(target);
  };
}
