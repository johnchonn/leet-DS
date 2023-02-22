// BIG O NOTATION

// The Time Complexity of an algorithm refers to its runtime in relation to an increase or decrease in the number of inputs. 
// The notation used to describe the performance and complexity (the number of operations) of an algorithm is known as Big O.


// Time Complexities:
// 1. Constant O(1)
// 2. Linear O(n)
// 3. Logarithmic O(log n)
// 4. Quadratic O(n^2)
// 5. Exponential O(2^n)

// CONSTANT TIME O(1)
// An algorithm has constant time complexity if it takes the same time regardless of the number of inputs.
// If an algorithm’s time complexity is constant, it means that it will always run in the same amount of time, no matter the input size.
// For example, if we want to get the first item of an array, it doesn’t matter how big the input size is.


// LINEAR COMPLEXITY O(n)
// An algorithm has linear complexity if the time taken increases linearly with the increase in the number of inputs.
// If an algorithm’s time complexity is linear, it means that the runtime of the algorithm grows almost linearly with the input size.
// A typical example of this, is by looping over an array. The more elements there are in the array, the longer it takes to finish looping!


// QUADRATIC COMPLEXITY O(n^2)
// If an algorithm’s time complexity is quadratic, it means that the runtime of the algorithm is directly proportional to the square of the size of the input.
// A common example of an algorithm with quadratic time complexity is by looping over an array,
// and comparing the current element with all other elements in the array.
// We have to loop over n elements, and for every element, we again have to loop over n elements. This ends up being n * n, which is n^2.


// LOGARITHMIC COMPLEXITY O(log(n))
// The size of the input gets split into half with each iteration of the function.
// If an algorithm has logarithmic time complexity, it means that the size of the input we are considering gets split into half with each iteration.
// Let’s say that we have a function that takes 1 second to execute if the input size is 100.
// With a logarithmic runtime, it would then take 2 seconds if the input size is 1000, and 3 seconds if the input size is 10,000.
// The bigger the input size gets, the smaller the difference in runtime!


// Let’s say that we’re looking for the value of 7 in this sorted array.
// With a specific searching algorithm, we split the input array on every round,
// and only check the side of the half (displayed as the dotted line) where the value could potentially be.


// EXPONENTIAL COMPLEXITY O(2^n)
// The runtime of the algorithm gets doubled after every addition in the input.
// If an algorithm’s time complexity is O(2^n), its runtime is doubled after every addition to the input size.
// If 5 items took 30 seconds, 6 items would take 60 seconds.

// Ex:
[1, 0, 0, 1, 1, 0, 0, 1, 1]

// In the following example, the value of an element is either 0 or 1.
// The amount of possibilities with 0 and 1 that this array could have, is 2^9 = 512.
// However, if we add just one more element, we have 2^10 = 1024 possibilities.
// By just adding one element, we doubled the number of possibilities!