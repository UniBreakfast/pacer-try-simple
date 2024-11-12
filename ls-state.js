var state, actualState

const defaultState = {
  confidence: 0,
  activities: [],
  quests: []
}

loadStateFromLS()

proxifyState()

window.addEventListener('keydown', e => {
  if (e.ctrlKey && !e.shiftKey && e.code === 'KeyS') {
    e.preventDefault()

    saveStateToLS()

    alert('State saved to localStorage!')
  }
})

function loadStateFromLS() {
  state = JSON.parse(localStorage.getItem('pacer-simple-state'))
    || defaultState
}

function saveStateToLS() {
  localStorage.setItem('pacer-simple-state', JSON.stringify(state))

  document.documentElement.classList.remove('unsaved')
}

// Proxifing function by o1-preview
function watchObject(obj, callback) {
  const isObject = (val) => val && typeof val === 'object';

  const handler = {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);
      if (prop === '__isProxy') return true;

      // Recursively proxy nested objects and arrays
      if (isObject(value) && !value.__isProxy) {
        return new Proxy(value, handler);
      }
      return value;
    },
    set(target, prop, value, receiver) {
      const oldValue = target[prop];
      const result = Reflect.set(target, prop, value, receiver);
      if (oldValue !== value) {
        callback();
      }
      return result;
    },
    deleteProperty(target, prop) {
      const result = Reflect.deleteProperty(target, prop);
      callback();
      return result;
    },
    // Intercept array methods that modify the array
    apply(target, thisArg, argumentsList) {
      const result = Reflect.apply(target, thisArg, argumentsList);
      callback();
      return result;
    }
  };

  // Start proxying from the root object
  return new Proxy(obj, handler);
}

function onChange() {
  document.documentElement.classList.add('unsaved')
}

function proxifyState() {
  document.documentElement.classList.remove('unsaved')
  
  state = watchObject(actualState = state, onChange)
}
