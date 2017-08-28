let rose = new Rose();
let jack = new MaleBear('Jack');
let billy = new MaleBear('Billy');
let bla = new MaleBear('Bla');

rose.reaction(billy);
jack.reaction(rose);
jack.reaction(billy);
billy.reaction(bla);