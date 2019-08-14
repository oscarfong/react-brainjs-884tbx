import brain from 'brain.js';
//const brain = require('../dist/index').default;

// see: https://github.com/BrainJS/brain.js#for-training-with-rnn-lstm-and-gru

const trainingData = [
  'Jane saw Doug.',
  'Doug saw Jane.',
  'Spot saw Doug and Jane looking at each other.',
  'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.'
];


const lstm = new brain.recurrent.LSTM();
const result = lstm.train(trainingData, {
  iterations: 1500,
  log: details => console.log(details),
  errorThresh: 0.011
});
const run1 = lstm.run('Jane');
const run2 = lstm.run('Doug');
const run3 = lstm.run('Spot');
const run4 = lstm.run('special');  //It

console.log('run 1: Jane' + run1);
console.log('run 2: Doug' + run2);
console.log('run 3: Spot' + run3);
console.log('run 4: special' + run4);

// serialize / save or load in the state of a trained network with JSON:
// 
// const json = net.toJSON();
// net.fromJSON(json);
// 
//console.log( lstm.toJSON());

export default run1;