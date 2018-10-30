export type mixed = { [key: string]: any } | object | number | string | boolean | symbol | undefined | null | void

declare global {
  type unknown = mixed
}
