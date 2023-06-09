import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  base: "/form-and-validations/",
  plugins: [react()],
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
