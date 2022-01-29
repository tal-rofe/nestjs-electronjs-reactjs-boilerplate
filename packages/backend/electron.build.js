module.exports = {
	productName: 'whatever',
	appId: 'whatever',
	copyright: 'Copyright © 2022 ${author}',
	mac: {
		category: 'public.app-category.productivity',
	},
	win: {
		asar: false,
		target: 'nsis',
		icon: 'assets/icon.ico',
	},
	dmg: {
		contents: [
			{
				x: 130,
				y: 220,
			},
			{
				x: 410,
				y: 220,
				type: 'link',
				path: '/Applications',
			},
		],
	},
	nsis: {
		installerIcon: 'assets/icon.ico',
		installerHeaderIcon: 'assets/icon.ico',
		deleteAppDataOnUninstall: true,
	},
	directories: {
		buildResources: 'assets',
		output: 'packages',
	},
	extraResources: ['./assets/**'],
	files: ['package.json', 'dist/**', './assets/**'],
};
