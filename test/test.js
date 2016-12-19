import fs from 'fs'
import parse from 'css-parse'
import path from 'path'
import sass from 'node-sass'
import stylus from 'stylus'
import test from 'tape'
import gride from '../index'
import {StringDecoder} from 'string_decoder'
import removeEmptyLines from 'remove-blank-lines'

const testPath = path.join(__dirname, './fixtures')

function getStylusOutput(file) {
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

function getSassOutput(file) {
  let out = sass.renderSync({
    file: path.join(testPath, file),
    includePaths: [path.resolve(__dirname, '/..')],
    outputStyle: 'expanded'
  })
  const decoder = new StringDecoder('utf8');
  const actualOutput = decoder.write(new Buffer(out.css))

  return JSON.stringify(parse(actualOutput))
}

function getExpectedOutput(file, extension) {
  const expectedOutput =
    fs.readFileSync(path.join(testPath, 'expected-' + extension, file), 'utf8')

  return JSON.stringify(parse(expectedOutput))
}

test('col', t => {
  const actualStylus = getStylusOutput('col.styl')
  const actualSass = getSassOutput('col.scss')
  const expectedStylus = getExpectedOutput('col.css', 'stylus')
  const expectedSass = getExpectedOutput('col.css', 'scss')

  t.equal(actualStylus, expectedStylus)
  t.equal(actualSass, expectedSass)
  t.end()
})

test('debug', t => {
  const actualStylus = getStylusOutput('debug.styl')
  const expectedStylus = getExpectedOutput('debug.css', 'stylus')
  const actualSass = getSassOutput('debug.scss')
  const expectedSass = getExpectedOutput('debug.css', 'scss')

  t.equal(actualStylus, expectedStylus)
  t.equal(actualSass, expectedSass)
  t.end()
})

test('offset', t => {
  const actualStylus = getStylusOutput('offset.styl')
  const actualSass = getSassOutput('offset.scss')
  const expectedStylus = getExpectedOutput('offset.css', 'stylus')
  const expectedSass = getExpectedOutput('offset.css', 'scss')

  t.equal(actualStylus, expectedStylus)
  t.equal(actualSass, expectedSass)
  t.end()
})

test('row', t => {
  const actualStylus = getStylusOutput('row.styl')
  const actualSass = getSassOutput('row.scss')
  const expectedStylus = getExpectedOutput('row.css', 'stylus')
  const expectedSass = getExpectedOutput('row.css', 'scss')

  t.equal(actualStylus, expectedStylus)
  t.equal(actualSass, expectedSass)
  t.end()
})

test('span stylus', t => {
  const actualStylus = getStylusOutput('span.styl')
  const actualSass = getSassOutput('span.scss')
  const expectedStylus = getExpectedOutput('span.css', 'stylus')
  const expectedSass = getExpectedOutput('span.css', 'scss')

  t.equal(actualStylus, expectedStylus)
  t.equal(actualSass, expectedSass)
  t.end()
})
