# Parcel 

- Dev bulid
- Local server
- HMR = Hot Module Replacement
- File watching Algorithm - written in C++
- Caching - Faster builds
- Image Optimaization
- Minification
- bundling
- HTTPs
- Tree Shanking - Remove unused Code
- Error handling
- Diagnostic
- Different dev and Production Build

Two types of Export/Import

- Default Export/Import
export default Component
import Component from path

- Named Export/Import
export const Component
import { Component } from path

# React Hooks

- Normal Utility Function (written by facebook)
Most IMP Hooks
-useState() - SuperPower State variable in React
-useEffect() - first component will run the this hook will be run.

-whenever the state variable update react trigger the reconciliation cycle(re-render the Component)

# Two types of Routing in web page

- client side routing
- server side routing

# redux tool-kit

- Installed @reduxjs/toolkit and react redux libraries
- Build our store
- connect our store to our app
- Slice (cartSlice)
- Dispatch(action)
- Selector


# Types of Testing (developer)
- Unit Testing
- Integration Testing
- End to End Testing

# setting Up Testing in out app 
- Install React Testing library
- Installed jest
- Installed babel dependencies
- configure babel
- configure Parcel Config file to disable default babel transpilation
- jest configuration
  - Jest npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make jsx work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom