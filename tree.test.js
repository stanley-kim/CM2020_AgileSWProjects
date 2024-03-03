const Tree = require('./tree.js');
let neoTree = new Tree('P0', 'A0', 'A1');

test('check get_Root_ID return value is not null', ()=>{
    expect(neoTree.get_Root_ID() != null).toBe(true);
});
test('check get_Root_ID return value is String 0', ()=>{
    expect(neoTree.get_Root_ID()).toBe('0');
});

test('check normal insert return value is true', ()=>{
     expect(neoTree.insert2(neoTree.get_Root_ID(), neoTree.get_Root_ID() + "0", true, 'P1', 'A1', 'A2', 'S1')).toBe(true);
});

test('check null ID insert return value is false', ()=>{
    expect(neoTree.insert2(neoTree.get_Root_ID(), null, true, 'P2', 'A1', 'A2', 'S2')).toBe(false);
});
