import test from 'ava'
import {
  Hello,
} from '../src'


test('Hello#say()', t => {
  const hello = new Hello('naki')
  console.log(hello.say())
  t.is(hello.say(), 'Hello, naki')
})