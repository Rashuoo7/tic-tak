import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        exclude: [...configDefaults.exclude, 'packages/template/*', 'tests/*'],
        globals: true,
        environment: "jsdom",
        browser: {
            enabled: false,
            name: 'chrome', // browser name is required
        },
    },
})