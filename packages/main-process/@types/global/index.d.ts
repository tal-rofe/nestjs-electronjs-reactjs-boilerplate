export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly NODE_ENV?: string;
			readonly PORT?: string;
			readonly OS_TARGET?: string;
		}
	}
}
