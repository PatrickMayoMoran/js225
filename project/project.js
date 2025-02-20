(function() {
  function findObjs(element, props, multiple) {
    let match = multiple ? [] : undefined;

    element.some(function(obj) {
      let allMatch = true;
    
      for (let prop in props) {
        if (!(prop in obj) || obj[prop] !== props[prop] ) {
          allMatch = false;
        }
      }
    
      if (allMatch) {
        if (multiple) {
        match.push(obj);
        } else {
          match = obj;
          return true;
        }
      }
    });

    return match;
  };

  let _ = function(element) {
    let u = {
      first() {
        return element[0];
      },

      last() {
        return element[element.length - 1];
      },

      without(...args) {
        return element.filter(e => !args.includes(e));
      },

      lastIndexOf(el) {
        for (let i = element.length - 1; i >= 0; i--) {
          if (element[i] === el) return i;
        }
        return -1;
      },

      sample(quantity) {
        let sampled = [];
        let copy = [...element];
        let get = function() {
          let idx = Math.floor(Math.random() * copy.length);
          let el = copy[idx];
          copy.splice(idx, 1);
          return el;
        };

        if (!quantity) return get();
        for (let i = 0; i < quantity; i++) {
          let el = get();
          sampled.push(el);
        };

        return sampled;
      },

      findWhere(props) {
        return findObjs(element, props, false);
      },

      where(props) {
        return findObjs(element, props, true);
      },

      pluck(key) {
        let values = [];
        element.forEach(obj => {
          if (obj.hasOwnProperty(key)) {
            values.push(obj[key]);
          }
        });
        return values;
      },

      keys() {
        let keys = Object.keys(element);
        return keys.filter(key => element.hasOwnProperty(key));
      },

      values() {
        let keys = Object.keys(element);
        let ownKeys = keys.filter(key => element.hasOwnProperty(key));
        return ownKeys.map(key => element[key]);
      },

      pick(...props) {
        let newObj = {};
        props.forEach(prop => {
          if (element.hasOwnProperty(prop)) {
            newObj[prop] = element[prop];
          }
        });

        return newObj;
      },

      omit(...props) {
        let newObj = {};
        let keys = Object.keys(element);
        let remainingKeys = keys.filter(key => element.hasOwnProperty(key) && !props.includes(key));
        remainingKeys.forEach(key => newObj[key] = element[key]);
        return newObj;
      },

      has(property) {
        if (Object.prototype.hasOwnProperty.call(element, property)) return true;
        return false;
      },
    };

    (["isElement", "isArray", "isObject", "isFunction", "isString", "isNumber", "isBoolean"].forEach(method => u[method] = function() { _[method].call(u, element) }));

    return u;
  };

  window._ = _;

  _.range = function(...args) {
      let start, end;
      start = args.length === 1 ? 0 : args[0];
      end = args.length === 1 ? args[0] : args[1];
      let newRange = [];
      for (let i = start; i < end; i++) {
        newRange.push(i);
      };
      return newRange;
    };

  _.extend = function (...objs) {
      function merge(oldObj, newObj) {
        for (let prop in newObj) {
          oldObj[prop] = newObj[prop];
        }
        return oldObj;
      };

      if (objs.length === 2) {
        let oldObj = objs[0];
        let newObj = objs[1];
        return merge(oldObj, newObj);
      } else {
        let oldObj = objs[0];
        let newObj = objs.pop();
        merge(oldObj, newObj);
        return _.extend(...objs);
      }
    };

  _.isElement = function(obj) {
    return obj && obj.nodeType === 1;
  };

  _.isArray = Array.isArray || function(obj) {
    return toString.call(obj) === "[object Array]";
  };

  _.isObject = function(obj) {
    let type = typeof obj;
    return ((type === "object" || type === "function") && !!obj);
  };

  _.isFunction = function(obj) {
    let type = typeof obj;
    return type === "function";
  };

  _.isBoolean = function(obj) {
    return (toString.call(obj) === "[object Boolean]");
  };

  _.isString = function (obj) {
    return (toString.call(obj) === "[object String]");
  };

})();
