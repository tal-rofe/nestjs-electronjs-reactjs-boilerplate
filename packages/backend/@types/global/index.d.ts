export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly NODE_ENV?: string;
			readonly MAIN_PROCESS_PORT?: string;
			readonly OS_TARGET?: string;
			readonly FRONTEND_PORT?: string;
		}
	}
}
