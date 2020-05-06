interface IPluck {
  <T, K extends keyof T>(o: T, names: K[]): T[K][]
}