// tailwind.config.js
import lineClamp from '@tailwindcss/line-clamp';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // adjust as per your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    lineClamp, // 👈 Add this line
  ],
};
