# OnDemandJS

Load JS files just before they are needed based on the location of the
mouse pointer.

## Usage

Include the on-demand.js file in your HTML page. Then add something
like the following.

``` javascript
document.addEventListener('DOMContentLoaded', function() {
  OnDemand.init({ weight: 100 });

  OnDemand.addWatch("div-id-1", "scripts/somefile0.js", function(){
    alert("scipts/somefile0.js has been added to the page");
  });


  OnDemand.addWatch("div-id-2", "scripts/somefile1.js", function() {
    alert("scripts/somefile1.js has been aded to the page");
  });
});
```

The weight that is passed in this example is optional, it defaults to 200.
The weight is how many pixels around the element you want to trigger off
adding the script to your page.

Then when adding a watch you pass in the id of the element, the file to
be loaded, and an optional callback that currently runs just after adding
in the new script element. I plan to move this to execute after the
script has loaded and been processed.

## License

Copyright (c) 2013 Brady Love

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
