import type { Config } from 'jest';

const config: Config = {
    bail: 1,
    collectCoverage: true,
    collectCoverageFrom: [
        '*.{js,jsx,ts,tsx}',
        '!**/*.test.{js,jsx,ts,tsx}',
        '!**/*.{types,d}.{ts,tsx}',
        '!constants/**',
        '!types/**',
    ],
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    coverageReporters: ['text', 'lcov', 'json', 'html'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {},
    modulePaths: ['<rootDir>/app'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest'
    },
    transformIgnorePatterns: [
        'node_modules/(?!(lodash-es|@azure/(storage-blob|core-rest-pipeline|core-auth|core-http))/)'
    ],
    setupFilesAfterEnv: ['@testing-library/jest-dom']
};

export default config;
