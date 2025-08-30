import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fetchJson } from '../fetchJson';

describe('fetchJson', () => {
  const url = 'https://api.example.com/data';

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns parsed JSON when response is ok', async () => {
    const body = { hello: 'world' };
    const resp = new Response(JSON.stringify(body), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

    const spy = vi.spyOn(global, 'fetch').mockResolvedValue(resp);

    const result = await fetchJson<typeof body>(url);
    expect(result).toEqual(body);
    expect(spy).toHaveBeenCalledWith(url, undefined);
  });

  it('forwards RequestInit options to fetch', async () => {
    const resp = new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

    const spy = vi.spyOn(global, 'fetch').mockResolvedValue(resp);

    const options: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: 1 }),
    };

    await fetchJson(url, options);
    expect(spy).toHaveBeenCalledWith(url, options);
  });

  it('throws with status and statusText when response is not ok', async () => {
    const resp = new Response('', { status: 404, statusText: 'Not Found' });
    vi.spyOn(global, 'fetch').mockResolvedValue(resp);

    await expect(fetchJson(url)).rejects.toThrow(
      'Request failed: 404 Not Found'
    );
  });

  it('propagates underlying network errors (rejects from fetch)', async () => {
    const networkErr = new TypeError('Network down');
    vi.spyOn(global, 'fetch').mockRejectedValueOnce(networkErr);

    await expect(fetchJson(url)).rejects.toBe(networkErr);
  });
});
