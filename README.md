# JS-TASK

## GUIDE

This requires the use of **a live-server** due to ES6 modules.

### JetBrains IDE

Open the project in the IDE, right-click [index.html](index.html) and press ``Run``.

### VSCode

Use [live server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), right click
the [index.html](index.html) and press 'Run' or some other preferred method.

## TASKS

- [ ] Create an object-oriented app about products that belong to a category.
- [x] Product (``string`` title, ``double`` price, ``date`` added, ``int`` pcs (normally 1, could be e.g. 2, 10 or 50) )
  as case around which to create ECMAScript feature attempts.
- It might make sense to use a ``create-react-app`` project as you get the ES 5,6,7 support from that project regardless
  what browser supports.

- [X] Start first e.g. by defining some test data in data structure.
    - There is a random test data generator.
- [X] Possibly starting from JSON text that you turn into JS objects (preparation for AJAX!).
- [X] Then some looping to do some simple logic. Free plan!

- Which way you keep the product - category relationship correct? How to **keep the programming data model sound**
  integrity-wise?
- There will be **several products belonging to same category**.
- Though do not overdo the integrity protection. You can also e.g. decide not to change category info in code.
- [x] Use minimum 50% of the features. Close to 90% if aiming higher.
    - [x] [Features](https://github.com/valju/JS_ES_Features)
- In some cases it's enough to do the "right way" only, e.g. create function scope variables in the beginning of the
  function and say that that would happen anyway, "because of variable hoisting". So no need to do things wrong way,
  unless that is required for proving the point.

## ADVANCED

1. Multi-level categorization? (Sports->Football->Red soccer sock)
    - [x] Inheritance or other enumeration hack
2. Products related to other products? Well, no need to look at these, might be challenging, and also the E-shop we look
    - Depending of how sophisticated one wants to be.
    - Must be a database operation since nobody's going to sort all data in the client. at, might already have a certain
      different solution]

## NOTES

- [Function Return Values - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values)
- [Classes - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
