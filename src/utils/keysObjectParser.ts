const toCamel = (s: any) => {
  return s.replace(/([-_][a-z])/ig, ($1: any) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};

const toSnake = (s: any) => {
  return s.split(/(?=[A-Z])/).join('_').toLowerCase();
};

const isArray = function (a: any) {
  return Array.isArray(a);
};

const isObject = function (o: any) {
  return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

const keyObjectParser = function (o: any, callback: Function) {
  if (isObject(o)) {
    const n: any = {};

    Object.keys(o)
      .forEach((k: any) => {
        n[callback(k)] = keyObjectParser(o[k], callback);
      });

    return n;
  } else if (isArray(o)) {
    return o.map((i: any) => {
      return keyObjectParser(i, callback);
    });
  }

  return o;
};

export const keysToCamelParser = (object: any) => {
  return keyObjectParser(object, toCamel);
}

export const keysToSnakeParser = (object: any) => {
  return keyObjectParser(object, toSnake);
}