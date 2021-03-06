jest.dontMock('../interviewer-bulk-upload.process');
describe('interviewer upload', function() {
  let m = require('mori');
  let xf = require('../interviewer-bulk-upload.process')
  it('upload csv', function() {
    let csv = [
      ["name","email","language","experience"],
      ["jichao","ouyang@jichao.com", "js","2"],
      ["sun","chen@sun.com", "js","2"]
    ]
    let [head, ...body] = csv;
    expect(m.toJs(m.into(m.vector(),xf(head),body))).toEqual([
      {
        email: 'ouyang@jichao.com',
        experience: '2',
        language: 'js',
        name: 'jichao'
      },
      {
        email: 'chen@sun.com',
        experience: '2',
        language: 'js',
        name: 'sun'
      }
    ])
  })
})
