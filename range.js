/**
 * Creates custom error
 * @param {string} msg Error message
 * @returns An error object
 */
function createError(msg) {
  const err = new Error(msg);
  Error.captureStackTrace(err, range);
  return err;
}

/**
 * Creates an array of numbers in sequence
 * @returns An array
 */
export function range() {
  const len_args = arguments.length;
  if (!len_args) {
    const err = createError("range expected 1 argument, got 0");
    throw err;
  }

  if (len_args > 3) {
    const err = createError(
      `range expected at most 3 arguments, got ${len_args}`
    );
    throw err;
  }

  // accepting only integer arguments
  for (arg of arguments) {
    if (typeof arg === "number" && !isNaN(arg)) {
      if (!Number.isInteger(arg)) {
        const err = createError(
          "'float' object cannot be interpreted as an integer"
        );
        throw err;
      }
    } else {
      const err = createError(`'${arg}' cannot be interpreted as an integer`);
      throw err;
    }
  }

  let [arg1, arg2 = arg1, arg3 = 1] = arguments;

  if (arg3 === 0) {
    const err = createError("range() arg 3 must not be zero");
    throw err;
  }

  let arr = [];

  if (arg3 < 0) {
    for (let i = arg1; i > arg2; i += arg3) {
      arr.push(i);
    }
    return arr;
  }

  if (len_args === 1) {
    arg1 = 0;
  }

  for (let i = arg1; i < arg2; i += arg3) {
    arr.push(i);
  }
  return arr;
}
