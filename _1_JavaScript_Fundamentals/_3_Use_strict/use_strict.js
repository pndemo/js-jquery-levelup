/* 
For a long time, JavaScript evolved without compatibility issues but from 2009 with (ES5),
new features were added to the language and existing ones modified. To keep the old code working,
most modifications are off by default and need to be defined explicitly with 'use strict'
*/

"use strict";

// This code works the modern way

// “use strict” always has to be at the top
alert( 'Hello, this is my world!' );

"use strict"; // will not work

// There is no way to cancel “use strict” hence once we enter strict mode there is no return.

/*
1. The "use strict" directive switches the engine to the “modern” mode, changing the behavior
of some built-in features.

2. Strict mode is enabled by placing "use strict" at the top of a script or function. Several
language features, like “classes” and “modules”, enable strict mode automatically.

3. Strict mode is supported by all modern browsers.

4. It is recommended to always start scripts with "use strict".
*/
