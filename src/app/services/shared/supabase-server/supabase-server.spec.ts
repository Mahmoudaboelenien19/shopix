import { TestBed } from '@angular/core/testing';
import { SupabaseServer } from './supabase-server';

describe('SupabaseServer', () => {
  let service: SupabaseServer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupabaseServer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
