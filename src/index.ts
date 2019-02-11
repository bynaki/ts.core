export class Hello {
  constructor(public name: string) {}

  say() {
    return `Hello, ${this.name}`
  }
}
