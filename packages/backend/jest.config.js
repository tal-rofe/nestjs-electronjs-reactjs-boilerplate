module.exports = {
	clearMocks: true,
	preset: 'ts-jest',
	collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
	coveragePathIgnorePatterns: [
		'<rootDir>/src/renderer/index.tsx',
		'<rootDir>/src/renderer/setupTests.ts',
		'<rootDir>/src/renderer/reportWebVitals.ts',
		'<rootDir>/src/renderer/assets/',
		'<rootDir>/src/renderer/i18n/',
	],
	coverageThreshold: {
		global: {
			branches: 30,
			functions: 30,
			lines: 30,
			statements: 30,
		},
	},
};
