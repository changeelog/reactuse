import { baseJestConfig } from './jest.config.base';

const config = {
  ...baseJestConfig,
  testEnvironment: 'jsdom', // browser-like
};

export default config;
