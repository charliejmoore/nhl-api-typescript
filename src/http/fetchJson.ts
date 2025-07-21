/**
 * Basic HTTP fetching utility.
 *
 * @export
 * @template T
 * @param {string} url - URL to make the query to.
 * @param {RequestInit} [options] - Any query options.
 * @throws {Error} - Throws error if response is not "ok" i.e., in the 200s. @see https://developer.mozilla.org/en-US/docs/Web/API/Response/ok.
 * @return {Promise<T>} Returns the response in JSON format.
 */
export async function fetchJson<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
