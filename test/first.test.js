import {assert, expect, it, test} from 'vitest'
import { JSDOM } from 'jsdom'
import path from 'path'
import fs from 'fs'

const html = fs.readFileSync(path.resolve(__dirname, '../js/index.js'), 'utf8');
let dom;
let container;

describe('index.js', () => {
    beforeEach(() => {
        dom = new JSDOM(html, {runScripts: 'dangerously'})
        container = dom.window.document.body
    })


    // it('renders a heading element', () => {
    //     expect(container.querySelector('#main-board')).not.toBeNull()
    //     // expect(getByText(container, 'Pun Generator')).toBeInTheDocument()
    // })
})


test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2)
  expect(Math.sqrt(144)).toBe(12)
  expect(Math.sqrt(2)).toBe(Math.SQRT2)
})








// test('JSON', () => {
//   const input = {
//     foo: 'hello',
//     bar: 'world',
//   }
//
//   const output = JSON.stringify(input)
//
//   expect(output).eq('{"foo":"hello","bar":"world"}')
//   assert.deepEqual(JSON.parse(output), input, 'matches original')
// })