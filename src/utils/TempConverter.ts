/*
 * @param {number} temperature in celsius . Function will convert it to farhenite and return it.
 */

function celToFe(param: number): number {
  return Math.trunc(param * (9 / 5) + 32);
}

/*
 * @param {number} temperature in farhenite . Function will convert it to celsius and return Math.trunc( it.);
 */

function feToCe(param: number): number {
  return Math.trunc((param - 32) * (5 / 9));
}

export { celToFe, feToCe as felToCe };
