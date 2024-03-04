const Tree = require('./tree.js');
let neoTree = new Tree('P0', 'A0', 'A1');

test('check get_Root_ID return value is not null', ()=>{
    expect(neoTree.get_Root_ID() != null).toBe(true);
});
test('check get_Root_ID returns String 0', ()=>{
    expect(neoTree.get_Root_ID()).toBe('0');
});

test('check normal insert returns true', ()=>{
     expect(neoTree.insert2(neoTree.get_Root_ID(), neoTree.get_Root_ID() + "0", true, 'P1', 'A1', 'A2', 'S1')).toBe(true);
});

test('check insert with null ID returns false', ()=>{
    expect(neoTree.insert2(neoTree.get_Root_ID(), null, true, 'P3', 'A1', 'A2', 'S2')).toBe(false);
});

test('check insert with same ID returns false', ()=>{
    expect(neoTree.insert2(neoTree.get_Root_ID(), neoTree.get_Root_ID() + "0", true, 'P2', 'A1', 'A2', 'S1')).toBe(false);
});

test('check insert with null parent ID returns false', ()=>{
    expect(neoTree.insert2(null, "neo", true, 'P2', 'A1', 'A2', 'S1')).toBe(false);
});


test('check insert with non existing parent ID returns false', ()=>{
    expect(neoTree.insert2("new", "neo2", true, 'P2', 'A1', 'A2', 'S1')).toBe(false);
});


test('check insert with null suggestion string returns false', ()=>{
    expect(neoTree.insert2(neoTree.get_Root_ID(), neoTree.get_Root_ID() + "1", false, 'P4', 'A1', 'A2', null)).toBe(false);
});

test('check insert with null problem string returns false', ()=>{
    expect(neoTree.insert2(neoTree.get_Root_ID(), neoTree.get_Root_ID() + "1", true, null, 'A1', 'A2', 'S1')).toBe(false);
});



