export class Hello {
  constructor(public name: string) {}

  say() {
    return `Hello, ${this.name}`
  }
}

const hello = new Hello('World!!')
console.log(hello.say())