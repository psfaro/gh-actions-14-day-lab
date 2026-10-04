import test from 'node:test';
import assert from 'node:assert/strict';
import { greeting } from '../src/app.js';

test('returns a greeting', () => {
  assert.equal(greeting('GitHub Actions'), 'Hello, GitHub Actions!');
});

test('rejects an empty name', () => {
  assert.throws(() => greeting(''), /required/);
});
