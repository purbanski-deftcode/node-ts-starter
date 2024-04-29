import { describe, test } from 'node:test';
import * as assert from 'node:assert/strict';
import { sum } from './sum';

void describe('unit test for sum function', () => {
  void test('it should sum two numbers', () => {
    assert.equal(sum(1, 2), 3);
  });
});
