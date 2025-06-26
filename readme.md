# 🍔 Online Food Ordering App

Welcome to the **Online Food Ordering App** – a modern web-based platform where users can order food seamlessly. This app is built using **React**, **Redux Toolkit**, **Parcel**, **Tailwind CSS**, and **React Testing Library (Jest)**.

🔗 **Live Demo**: [onlinefoodallpication.vercel.app](https://onlinefoodallpication.vercel.app)

---

## ⚠️ CORS Note

To view the website locally, make sure to install a CORS extension in your Chrome browser.

---

## ⚙️ Development Environment – Parcel

This project uses **Parcel**, a powerful web application bundler. Here’s what it offers:

- **Dev Build**
- **Local Server**
- **HMR (Hot Module Replacement)**
- **File Watching Algorithm** (written in C++)
- **Caching** (for faster builds)
- **Image Optimization**
- **Minification**
- **Bundling**
- **HTTPS support**
- **Tree Shaking** (removes unused code)
- **Error Handling**
- **Diagnostics**
- **Separate Development and Production Builds**

---

## 🔄 JavaScript Module Exports

### ➤ Default Export/Import

// Export
export default Component;

// Import
import Component from './path';

# ⚛️ React Concepts
# 🧠 React Hooks (Utility Functions by Facebook)

useState() – Superpowered state variable in React.
useEffect() – Runs after component mounts or state updates.
React triggers the Reconciliation Cycle whenever a state variable updates, re-rendering the component.


# 🧭 Web Routing

There are two types of routing in web development:
Client-side Routing – Managed using libraries like React Router DOM.
Server-side Routing – Managed on the backend (e.g., Node.js/Express).

# 🛠 Redux Toolkit Integration
State management is handled using Redux Toolkit.

Steps:
Install @reduxjs/toolkit and react-redux
Create the Redux Store
Connect the store to the React app using <Provider>
Create Slices (e.g., cartSlice)
Use dispatch(action) to send actions
Use useSelector() to read data from the store

# 🧪 Testing Strategy
Testing is done using Jest and React Testing Library.

✅ Types of Testing:

Unit Testing
Integration Testing
End-to-End Testing

# 🔧 Setup Instructions:

1. Install React Testing Library
npm install @testing-library/react

2. Install Jest
npm install jest --save-dev

3. Configure Babel
npm install @babel/preset-env @babel/preset-react --save-dev
Create a .babelrc file:

{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}


4. Disable Parcel’s default Babel transpilation
Modify .parcelrc to handle custom Babel config.

5. Initialize Jest
npx jest --init

6. Install jsdom (Jest DOM Environment)
npm install jsdom

7. Install @testing-library/jest-dom
npm install @testing-library/jest-dom

# 📌 About the Project
This is an online food delivery platform where users can browse and order meals. The application uses:

React – UI development
Redux Toolkit – State management
React Router DOM – Navigation and routing
Tailwind CSS – Modern utility-first styling
Jest + React Testing Library – Unit and component testing

# 🚀 Deployment History
Deployed via Vercel:

✅ Production – onlinefoodapp (3 months ago)
✅ Production – onlinefoodallpication (3 months ago)
✅ Additional 3 production deployments