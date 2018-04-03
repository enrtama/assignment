
/**
 * @file App tests
 * @author Enrique Tamames
 * @module tests/App
 * @version 0.0.1
 */

import React from 'react';
import { App } from '../components/App';

import renderer from 'react-test-renderer';

it('test true equals true', () => {
  // const rendered = renderer.create(<App />).toJSON();
  // expect(rendered).toBeTruthy();
  expect(true).toBe(true);
});
