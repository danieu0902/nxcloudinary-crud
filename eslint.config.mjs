import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extiende las configuraciones de Next.js
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Añade reglas personalizadas aquí, si las necesitas
      "react/react-in-jsx-scope": "off", // Reglas específicas de React
      "no-unused-vars": "warn", // Advertencias para variables no usadas
    },
  },
];

export default eslintConfig;
