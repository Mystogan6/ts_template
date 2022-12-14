export interface ILogger {
  error(...event: [any?, ...any[]]): void
  debug(...event: [any?, ...any[]]): void
  info(...event: [any?, ...any[]]): void
  log(...event: [any?, ...any[]]): void
}
