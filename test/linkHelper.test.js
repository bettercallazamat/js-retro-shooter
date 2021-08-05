import { linkedInOpener, gitHubOpener } from '../src/helpers/linkHelper';

it('linkedInOpener is a function', () => {
  expect(typeof linkedInOpener).toBe('function');
});

it('gitHubOpener is a function', () => {
  expect(typeof gitHubOpener).toBe('function');
});
