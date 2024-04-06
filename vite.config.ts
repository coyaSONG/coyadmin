import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const base = process.env.VITE_BASE_URL || '/';

// https://vitejs.dev/config/
export default defineConfig({
  base: base,
  plugins: [react()],
});
