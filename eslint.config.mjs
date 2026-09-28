// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  ...storybook.configs['flat/recommended'],
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
          disallowTypeAnnotations: true,
        },
      ],
      // Ban parent-relative imports (../../x and deeper) — use the @/ alias instead,
      // e.g. '@/modules/auth/consts'. Sibling './' and single-level '../' stay allowed.
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../../*', '../../**'],
              message:
                'Parent-relative imports are banned — use the @/ alias (e.g. "@/modules/auth/consts").',
            },
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
