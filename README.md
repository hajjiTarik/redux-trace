reTracer it is a redux middleware that allows you to have a view on the state of your application and the actions that are dispatched, and this presented in a simple way to understand without extention

## Installation

```js
import ReTrace from 'redux-trace';
```

## Usage

```js
const reTrace = new ReTrace();
const store = createStore(rootReducer, initialState, applyMiddleware(reTrace.start));
```