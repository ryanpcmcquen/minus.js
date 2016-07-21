# minus.js
Modern JavaScript minus all the typing.

`minus` is a minimalist JS library, also available as a Chrome extension. It serves two obvious purposes:

  1. Reduce the amount of _boilerplate_ code you write in a pure JavaScript library. Since it is ultra small, it can easily be included at the top of any library, giving access to all these awesome aliases:
    
    `m.d` for `document`
    
    `m.o` for `Object`
    
    `m.ap` for `Array.prototype`
    
    `m.eq` or `m.eqs` for `ELEMENT.querySelector`
    
    `m.eqa` or `m.eqsa` for `ELEMENT.querySelectorAll`
    
    `m.q` or `m.qs` for `document.querySelector`
    
    `m.qa` or `m.qsa` for `document.querySelectorAll`
    
    `m.ael` for `addEventListener`
    
    `m.oc` for `Object.create`
    
    `m.ok` for `Object.keys`
    
    `m.aspc` for `Array.prototype.slice.call`

    `m.qp` for `queryParent`, taken from [here](https://github.com/ryanpcmcquen/queryparent).

    `m.qsi` for `querySibling`, taken from [here](https://github.com/ryanpcmcquen/querysibling). Note that it is invoked as `m.qsi.p` for _previous_ siblings and `m.qsi.n` for _next_ siblings.

  2. Make debugging apps from the console far faster. If using `minus` as a Chrome extension, you'll have access to all the `m` methods right from the browser `console`.

Pull requests and feedback are welcome.


### Examples

```javascript
m.eq(m.d.body, '.baz');

m.eqa(m.d.body, '.baz');

m.q('.foo.bar');

m.qa('.bar.baz');

m.ael(SELECTOR, EVENT, CALLBACK);
```

...

