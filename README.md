A polyfill of `unknown` that works with legacy typescript versions (before 3.0)

```ts
export type mixed = { [key: string]: any } | object | number | string | boolean | symbol | undefined | null | void

declare global {
  type unknown = mixed
}
```

# Usage
1. `npm i unknown-ts -D`
2. At the entry point of your application, `import 'unknown-ts'`
