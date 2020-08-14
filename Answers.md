1. What problem does the context API help solve?
sharing state down a component tree.
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions- where your dispatch and creator dispatch is created
reducer -  in redux, is where the logic of saving your state lives. In general, is a function that takes 2 inputs and return only 1.
store -  store is where redux saves the state, reducer, and dispatch actions for the reduer or is where redux put everything together behind the scene 
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
In one state lives on the App component that is accessable to all components. The other one is where state lives in a specific components and it's not accessible to all component.

If you are prop drilling and your component architecture changes or is expected to change use Application state.

If you are using react hooks, and a specific state is only need it for a unic component, use component state. 
4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Middleware that adds functionality that allows action creators to return a function instead of an action. 
5. What is your favorite state management system you've learned and this sprint? Please explain why!
Redux 
because it has redux hooks and it allows you to create action creator on the component, and call the state on store like if you are discontructing props.

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 
