import { inject, REQUEST, Service } from '@angular/core';
import { environment } from '@env/environment';
import { createServerClient } from '@supabase/ssr';

@Service()
export class SupabaseServer {
  private request = inject(REQUEST, { optional: true });

  private client = createServerClient(environment.supabaseUrl, environment.supabaseAnonKey, {
    cookies: {
      getAll: () => this.parseCookies(this.request?.headers.get('cookie') ?? ''),
      setAll: () => {}, // handled via response headers if you need to refresh tokens
    },
  });

  get supabase() {
    return this.client;
  }

  private parseCookies(header: string) {
    return header
      .split(';')
      .filter(Boolean)
      .map((c) => {
        const [name, ...rest] = c.trim().split('=');
        return { name, value: rest.join('=') };
      });
  }
}
