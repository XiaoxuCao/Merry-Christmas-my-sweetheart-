import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // 这里的路径必须和你的仓库名完全一致
      base: '/Merry-Christmas-my-sweetheart-/', 
      plugins: [react()],
      resolve: {
        alias: {
          // 核心修改：将 @ 别名指向当前根目录 (.)，而不是 src
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
