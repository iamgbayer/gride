import fs from 'fs'
import parse from 'css-parse'
import path from 'path'
import stylus from 'stylus'
import test from 'tape'
import gride from '../index'

const testPath = path.join(__dirname, './fixtures')

function getActualOutput(file) {
  let actualOutput = ''

  stylus(fs.readFileSync(path.join(testPath, file), 'utf8'))
    .use(gride())
    .render((err, css) => {
      if (err) {
        actualOutput = err
      }
      actualOutput = css
    })

  return JSON.stringify(parse(actualOutput))
}

function getExpectedOutput(file) {
  const expectedOutput =
    fs.readFileSync(path.join(testPath, 'expected', file), 'utf8')

  return JSON.stringify(parse(expectedOutput))
}

test('col', t => {
  const actual = getActualOutput('col.styl')
  const expected = getExpectedOutput('col.css')

  t.equal(actual, expected)
  t.end()
})

test('debug', t => {
  const actual = getActualOutput('debug.styl')
  const expected = getExpectedOutput('debug.css')

  t.equal(actual, expected)
  t.end()
})

test('row', t => {
  const actual = getActualOutput('row.styl')
  const expected = getExpectedOutput('row.css')

  t.equal(actual, expected)
  t.end()
})

test('span', t => {
  const actual = getActualOutput('span.styl')
  const expected = getExpectedOutput('span.css')

  t.equal(actual, expected)
  t.end()
})
