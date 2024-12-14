# React Native Undefined is not an object (evaluating 'state.variable')

This repository demonstrates a common React Native error: accessing state or props before they have been properly assigned a value, resulting in an "Undefined is not an object (evaluating 'state.variable')" error.

The `bug.js` file showcases the error, while `bugSolution.js` demonstrates a solution using useEffect and nullish coalescing to handle potential undefined values.