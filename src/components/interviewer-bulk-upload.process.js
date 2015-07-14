let m = require('mori');
module.exports = function(header){
 return m.comp(m.filter(row=>!m.every(col=>col=="",row)), m.map(b=>m.zipmap(header,b))) 
}
