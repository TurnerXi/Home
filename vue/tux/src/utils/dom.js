const REGEX_SPACES = / +/g;
export function addClass(el, clz) {
  if (!el || !clz) { return; }
  if (el.classList) {
    el.classList.add(clz);
  } else {
    if (hasClass(el, clz)) {
      let clzNameArr = el.className.split(' ');
      clzNameArr.push(clz);
      el.className = clzNameArr.jon(' ').replace(REGEX_SPACES, ' ');
    }
  }
}

export function hasClass(el, clz) {
  if (!el || !clz) { return false; }
  if (el.classList) {
    return el.classList.contains(clz);
  } else {
    return clz.className.split(' ').indexOf(clz) > -1;
  }
}

export function removeClass(el, clz) {
  if (!el || !clz) { return; }
  if (el.classList) {
    el.classList.remove(clz);
  } else {
    if (hasClass(el, clz)) {
      el.className.replace(` ${clz}`, ' ').replace(REGEX_SPACES, ' ');
    }
  }
}

export function indexOf(elmList, elm) {
  return Array.prototype.indexOf.call(elmList, elm);
}
