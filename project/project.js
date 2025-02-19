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
    };

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

})();
