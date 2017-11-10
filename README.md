# Module 3 Code Challenge

## Implementation Notes

### The API

Instead of actually accessing the data from a remote API, this challenge uses a package called `json-server` to create an fake API for development and testing.

It is very easy to set-up.

1 - Run the command `npm install -g json-server` in the command line from this directory

2 - Run `json-server --watch db.json`

That's it. You will have a server running on localhost:3000 that serves the JSON data contained in the `db.json` file.

Troubleshooting: If this fails, be sure you don't already have something running on port 3000

The API endpoint we need to retrieve all the students is the conventional RESTful route of http://localhost:3000/students

### Styling

[Bootstrap](https://getbootstrap.com/docs/3.3/components/#list-group) is loaded into this project via a link tag in the head of the html. Generally, do not worry about styling in this application.

Though one important point is that for the student names to show up correctly the html should have the following class names:

```html
<ul class="list-group">
  <li class="list-group-item">Student 1</li>
  <li class="list-group-item">Student 2</li>
  /* etc... */
</ul>
```
TODO: anything else here?

### Considerations

You are free to solve this in any way you choose. It is not required that you have ES6 classes or use Object Orientation. We would recommend beginning with a straightforward functional implementation and refactoring to objects as needed.

jQuery is included in this project, you can choose to use jQuery or vanilla JS.

TODO: anything additional tips/ things to look out for here?
