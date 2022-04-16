import { fetch } from './fetch';
import { get, set } from './store';
export class FetchProvider {
  async get() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
      const res = await fetch(url, { signal: controller.signal });
      set('posts', await res.json());
      clearTimeout(timeoutId);
      return get('posts');
    }
    catch (error) {
      console.error(error);
      throw error;
    }
  }
}
