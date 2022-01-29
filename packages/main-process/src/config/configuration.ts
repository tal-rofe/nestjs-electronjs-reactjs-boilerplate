export default () => ({
	NODE_ENV: process.env.NODE_ENV ?? 'development',
	port: parseInt(process.env.PORT ?? '8080', 10) || 8080,
	osTarget: process.env.OS_TARGET ?? 'darwin',
});
