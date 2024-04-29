import { describe, test } from 'node:test';
import * as assert from 'node:assert/strict';
import { sum } from './sum';

describe('unit test for sum function', () => {
  test('it should sum two numbers', () => {
    assert.equal(sum(1, 2), 3);
  });
});
