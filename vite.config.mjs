// filepath: /Users/design3/Jeff/www/Projects/Flixx/vite.config.js
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
	base: mode === 'production' ? '/flixx/' : '/', // Use '/flixx/' only in production
}));
