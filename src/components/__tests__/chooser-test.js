jest.dontMock('../chooser');
var React = require('react/addons'),
    TestUtils = React.addons.TestUtils,
    Chooser = require('../chooser');
describe('Chooser', function() {
  var Selector = require('../selector')
  it('can get value when option changes', function() {
    TestUtils.mockComponent(Selector)
    var chooser = TestUtils.renderIntoDocument(
      <Chooser cb={function(){}}/>
    );
    chooser._handleSelect({target:
                           {selectedOptions:
                            [{dataset:
                             {name: 'jichao',
                              email:'jich@o.com',
                              key:'lost'}}]}});
    jest.runAllTicks();
    expect(chooser.value).toEqual(['lost']);
  })
})
