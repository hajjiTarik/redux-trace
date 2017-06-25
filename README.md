# redux-trace

![redux-trace](http://i.imgur.com/aSgXTGF.png)


![build status](https://travis-ci.org/hajjiTarik/redux-trace.svg?branch=master)
[![npm version](https://badge.fury.io/js/redux-trace.svg)](https://badge.fury.io/js/redux-trace)

it's a redux middleware that allows you to have a view on the state of your application and the actions that are dispatched, and this presented in a simple way to understand

## Installation

```js
import { agent } from 'redux-trace';
```

## Usage

```js
const store = createStore(rootReducer, initialState, applyMiddleware(agent));
```
