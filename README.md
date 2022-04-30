# Java to JavaScript (java2js)

java2js can translate simple Java programs to JavaScript and runs them using a JavaScript based JDK.

[Try it out!](https://quinton-ashley.github.io/java2js/) The demo files are located in the docs folder of this repository, its a barebones implementation that shows what is possible with java2js.

## Java classes included in the java2js JDK

| `java.io` |             |             |
| :-------- | ----------- | ----------- |
| File      | InputStream | PrintStream |

| `java.lang` |               |           |
| :---------- | ------------- | --------- |
| Boolean     | Byte          | Character |
| Double      | Exception     | Float     |
| Integer     | Long          | Short     |
| String      | StringBuilder | System    |
| Thread      |               |           |

| `java.security` |
| :-------------- |
| MessageDigest   |

| `java.time` |
| :---------- |
| Instant     |

| `java.util`        |                        |             |
| :----------------- | ---------------------- | ----------- |
| AbstractCollection | AbstractList           | AbstractMap |
| AbstractSet        | ArrayList              | Arrays      |
| Collections        | Formatter              | HashMap     |
| HashSet            | IllegalFormatException | Itr         |
| LinkedList         | Random                 | Scanner     |
| Set                | Stack                  |             |

## Features

The java2js transpiler supports:

- imports
- primitive type casting
- static classes
- static methods
- array literals
- arrays with initial size
- two dimensional arrays
- lambda arrow functions
- triple quote strings
- try/catch blocks

## API

### await jdk.init(root)

This function imports the standard java.lang classes into the global scope. You must use it before translating or running files.

- root: (optional) path to the JS JDK folder, by default it is `./jdk` (the java2js JS JDK), for online use on codepen or similar code sharing sites you can use this link as the root path: 'https://quinton-ashley.github.io/java2js/jdk'

### await jdk.transpile(javaFile)

Translates a Java class and loads it.

- javaFile: a String with a Java class in it

returns a String with the JavaScript transpilation of the Java class

### jdk.run(jvmArgs)

Runs the main method

- jvmArgs: (optional) String array of JVM arguments.

### jdk.workerPath

java2js might cause the main thread to stall when transpiling a large Java file. This can cause your website to appear unresponsive/frozen. You can (optionally) utilize the java2js worker script to transpile Java asynchronously in a seperate JS thread. However due to CORS security 'jav2js_worker.js' must be hosted on your own domain, define 'jdk.workerPath' to be the location of that file.

By default workerPath is undefined unless you are using java2js on a local server, in that case workerPath is the path to 'jav2js_worker.js' in the parent folder of jdk.root

## Known limitations

- not very good error reporting

- no support for method overloading, though a workaround might be possible by making a function with the og name route to each of the variations of the overloaded function

- no support for private/public methods yet, though this could be done since they are included in modern JavaScript classes

- no three dimensional arrays

- no third level static classes

- no method can be named `.length()` because it will be replaced with `.length` for getting the length of Strings in JS

## Why did you make this?

I created this package so intro level computer science students could write Java code but still use my [QuintOS](https://quintos.org) retro game engine library, which is web based.

## Credits

This project builds upon the [java-to-javascript](https://github.com/wyattades/java-to-javascript) transpiler by @wyattades. I also did a modern JS implementation of the fundamental classes in the JDK (Java Development Kit), which I got the inspiration to do from [java2javascript](https://github.com/java2script/java2script) by @BobHanson, @zhourenjian, @abego, and others.

## Contribute

I've only done a partial implementation of the Java 17 JDK in JavaScript, so if you're interested in adding more please go for it and submit a pull request!

## Commercial Use

This project is licensed under the copyleft GNU GENERAL PUBLIC LICENSE 3.0 (only) license. If you'd like to request legal permission to use this code in a commerical product or closed source project please email me (qashto@gmail.com) with a proposal of how you would like to use `java2js`.
