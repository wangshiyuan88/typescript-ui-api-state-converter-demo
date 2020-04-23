import get from 'lodash/get';
import set from 'lodash/fp/set';

type KeyPathBuilder<T extends object> = {
  of<P1 extends keyof NonNullable<T>>(prop1: P1): KeyPath<T, NonNullable<T>[P1]>;

  of<P1 extends keyof NonNullable<T>,
    P2 extends keyof NonNullable<NonNullable<T>[P1]>>(
    prop1: P1, prop2: P2
  ): KeyPath<T, NonNullable<NonNullable<T>[P1]>[P2]>;

}

export function keyPathOf<T extends object>(): KeyPathBuilder<T> {
  return {
    of: (...nestedKeys: string[]): KeyPath<T, any> => {
      return new KeyPath(nestedKeys);
    }
  }
}

export class KeyPath<T extends object, P> {
  get fullKeyPath() {
    return this.nestedKeys.join('.');
  }

  constructor(private nestedKeys: string[]) {
  }

}

export function getProperty<T extends object, P>(obj: T, keyPath: KeyPath<T, P>): P {
  // FIXME just quick and dirty
  return get(obj, keyPath.fullKeyPath);
}

export function setProperty<T extends object, P>(obj: T, keyPath: KeyPath<T, P>, value: P): T {
  // FIXME just quick and dirty
  return set(keyPath.fullKeyPath, value, obj);
}
