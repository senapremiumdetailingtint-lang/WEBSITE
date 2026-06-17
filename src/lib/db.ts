// Local SQLite store for booking requests — uses Node's built-in SQLite
// (node:sqlite, Node 22+). No native compilation, no external service.
// File lives in ./data/bookings.db (gitignored). Works locally and on any
// persistent Node host. On serverless hosts the file is ephemeral — that's
// why every booking is also delivered via WhatsApp / email.
import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

let db: DatabaseSync | null = null;

function getDb(): DatabaseSync {
  if (db) return db;
  const dir = join(process.cwd(), 'data');
  mkdirSync(dir, { recursive: true });
  db = new DatabaseSync(join(dir, 'bookings.db'));
  db.exec('PRAGMA journal_mode = WAL;');
  db.exec(`
    CREATE TABLE IF NOT EXISTS bookings (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at  TEXT NOT NULL,
      name        TEXT NOT NULL,
      phone       TEXT NOT NULL,
      email       TEXT,
      vehicle     TEXT,
      service     TEXT,
      preferred   TEXT,
      address     TEXT,
      notes       TEXT,
      consent     INTEGER NOT NULL DEFAULT 0,
      status      TEXT NOT NULL DEFAULT 'new'
    );
  `);
  return db;
}

export interface BookingInput {
  name: string;
  phone: string;
  email?: string;
  vehicle?: string;
  service?: string;
  preferred?: string;
  address?: string;
  notes?: string;
  consent: boolean;
}

export interface BookingRow extends BookingInput {
  id: number;
  created_at: string;
  status: string;
}

export function insertBooking(b: BookingInput): number {
  const stmt = getDb().prepare(`
    INSERT INTO bookings
      (created_at, name, phone, email, vehicle, service, preferred, address, notes, consent)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const info = stmt.run(
    new Date().toISOString(),
    b.name,
    b.phone,
    b.email ?? null,
    b.vehicle ?? null,
    b.service ?? null,
    b.preferred ?? null,
    b.address ?? null,
    b.notes ?? null,
    b.consent ? 1 : 0
  );
  return Number(info.lastInsertRowid);
}

export function getBookings(): BookingRow[] {
  return getDb()
    .prepare('SELECT * FROM bookings ORDER BY created_at DESC')
    .all() as unknown as BookingRow[];
}

export function updateBookingStatus(id: number, status: string): void {
  getDb().prepare('UPDATE bookings SET status = ? WHERE id = ?').run(status, id);
}
