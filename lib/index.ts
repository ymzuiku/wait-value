function waitValue<T>(fn: () => T, max = 400): Promise<T> {
  return new Promise((res, rej) => {
    let n = 0;
    const check = () => {
      const v = fn();
      if (v) {
        res(v);
      } else if (n < max) {
        n++;
        setTimeout(check, 20 + n);
      } else {
        rej();
      }
    };
    check();
  });
}

export default waitValue;
