/*
 * @param {number} temperature in celsius . Function will convert it to farhenite and return it.
 */

function celToFe(param: number): number {
  return param * (9 / 5) + 32;
}

/*
 * @param {number} temperature in farhenite . Function will convert it to celsius and return it.
 */

function felToCe(param: number): number {
  return (param - 32) * (5 / 9);
}

export { celToFe, felToCe };
