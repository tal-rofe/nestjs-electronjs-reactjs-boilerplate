export default () => ({
	NODE_ENV: process.env.NODE_ENV ?? 'development',
	mainProcessPort: parseInt(process.env.MAIN_PROCESS_PORT ?? '8080', 10) || 8080,
	osTarget: process.env.OS_TARGET ?? 'darwin',
});
