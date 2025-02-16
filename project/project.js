(function() {
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

      findWhere(search) {
        for (let i = 0; i < element.length; i++) {
          let candidate = element[i];
          let candidateKeys = Object.keys(candidate);
          let allMatch = function(search, candidate) {
            let searchKeys = Object.keys(search);
            let canKeys = Object.keys(candidate);
            if (searchKeys.length > canKeys.length) return false;
            for (let i = 0; i < searchKeys.length; i++) {
              let currKey = searchKeys[i];
              if (search[currKey] !== candidate[currKey]) return false;
            }
            return true;
          };
          if (allMatch(search, candidate)) return candidate;
        };
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
