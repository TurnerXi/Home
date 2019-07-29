export function clone(object) {
  if (object === null || object === undefined) {
    return object;
  }
  if (typeof (object) === 'object') {
    if (object instanceof Array) {
      let newArr = [];
      for (let i = 0; i < object.length; i++) {
        newArr[i] = clone(object[i]);
      }
      return newArr;
    } else {
      let newObj = {};
      for (let key in object) {
        newObj[key] = clone(object[key]);
      }
      return newObj;
    }
  } else {
    return object;
  }
}
