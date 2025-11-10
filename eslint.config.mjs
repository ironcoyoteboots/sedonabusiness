import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Keep your base Next.js rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Ignore common build directories
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },

  // ✅ Add this block to relax JSX text rules
  {
    rules: {
      // Allow real punctuation like — and ’ inside JSX
      "react/no-unescaped-entities": "off",

      // (Optional) enforce double quotes in JSX attributes
      // keeps things consistent while still allowing single quotes in text
      "jsx-quotes": ["error", "prefer-double"],
    },
  },
];

export default eslintConfig;
