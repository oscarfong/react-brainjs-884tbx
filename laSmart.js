
import NeuralNetwork from 'brain.js'

// Ref: brain.js input training data
//gdrv

// [0.428571428571429, 0.5, 0.2] , [0.428571428571429, 0.5, 0.2] ,

// provide optional config object, defaults shown.
const config = {
    inputSize: 30,
    inputRange: 30,
    hiddenLayers: [30],
    outputSize: 30,
    learningRate: 0.01,
    decayRate: 0.999,
};

// create a simple recurrent neural network
const net = new brain.NeuralNetwork(config);

net.train([{input: [0.428571428571429, 0.5, 0.2] , output: [0.428571428571429, 0.5, 0.2] ,},
           //{input: [0, 1], output: [1]},
           //{input: [1, 0], output: [1]},
           //{input: [1, 1], output: [0]}
           ]
           );

// const output = net.run([0, 0]);  // [0]
// output = net.run([0, 1]);      // [1]
// output = net.run([1, 0]);      // [1]
// output = net.run([1, 1]);      // [0]

var r2 = net.run( [ 0.5 ,0.5, 0.5]);
//var r2join = r2.join(",");
console.log( r2 );

var r1 = "test";

export default r1;