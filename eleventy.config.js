import EleventyVitePlugin from '@11ty/eleventy-plugin-vite';
import tailwindcss from '@tailwindcss/vite'

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(EleventyVitePlugin, {
		viteOptions: {
			plugins: [tailwindcss()],
		},
	});

	eleventyConfig.addPassthroughCopy('assets');

	// Filters
	eleventyConfig.addFilter("pathcheck", function(path, check) {
		let check1 = path.trim();
		let check2 = check.trim();

		if (!check1.endsWith("/")) check1.concat("/");
		if (!check2.endsWith("/")) check2.concat("/");

		return check1 === check2;
	});

	return {
		dir: {
			input: 'src', output: '_build'
		}
	}
};
