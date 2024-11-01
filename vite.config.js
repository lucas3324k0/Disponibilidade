import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Disponibilidade/', // Substitua pelo nome do seu repositório
});
