import test from 'ava'
import {
  Hello,
} from '../src'


test('Hello#say()', t => {
  const hello = new Hello('naki')
  let res = hello.say()
  console.log(res)
  t.is(res, 'Hello, naki')
})