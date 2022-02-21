# Java to JavaScript (java2js)

`java2js` can translate simple Java programs to JavaScript and runs them using a JavaScript based JDK.

Try out the demo in the docs folder of this repository. `index.html` and `ide.js` are a barebones implementation.

## Java classes included in the java2js JDK

| java.io |             |             |
| ------- | ----------- | ----------- |
| File    | InputStream | PrintStream |

| java.lang |               |           |
| --------- | ------------- | --------- |
| Boolean   | Byte          | Character |
| Double    | Exception     | Float     |
| Integer   | Long          | Short     |
| String    | StringBuilder | System    |
| Thread    | Throwable     |           |

| java.security |     |     |
| ------------- | --- | --- |
| MessageDigest |     |     |

| java.time |     |     |
| --------- | --- | --- |
| Instant   |     |     |

| java.util          |                        |             |
| ------------------ | ---------------------- | ----------- |
| AbstractCollection | AbstractList           | AbstractMap |
| AbstractSet        | ArrayList              | Arrays      |
| Collections        | Formatter              | HashMap     |
| HashSet            | IllegalFormatException | Itr         |
| LinkedList         | Random                 | Scanner     |
| Set                | Stack                  |             |

## Features

The java2js transpiler supports:

- imports
- static classes
- static methods
- array literals
- arrays with initial size
- two dimensional arrays
- lambda arrow functions
- triple quote strings

## API

### await jdk.init(root)

This function imports the standard java.lang classes into the global scope. You must use it before translating or running files.

- root (optional) path to the JS JDK folder, by default it is `./jdk` (the java2js JS JDK), for online use on codepen or similar code sharing sites you can use this link as the root path: 'https://unpkg.com/java2js/jdk'

### await jdk.transpile(javaFile)

Translates a Java class and loads it.

- javaFile is a String with a Java class in it

returns a String with the JavaScript transpilation of the Java class

### jdk.run(jvmArgs)

Runs the main method with optional JVM arguments.

## Known limitations

- not very good error reporting

- casting to int (truncation) requires parenthesis around the number being cast `int x = (int) (Math.random() * 100);`

- no support for method overloading, though a workaround might be possible by making a function with the og name route to each of the variations of the overloaded function

- no support for private/public methods yet, though this could be done since they are included in modern JavaScript classes

- no three dimensional arrays

- no third level static classes

- no method can be named `.length()` because it will be replaced with `.length` for getting the length of Strings in JS

## Why did you make this?

I created this package so intro level computer science students could write Java code but still use my [QuintOS](https://github.com/quinton-ashley/quintos) retro game engine library, which is web based.

## Credits

This project builds upon the [java-to-javascript](https://github.com/wyattades/java-to-javascript) transpiler by @wyattades. I also did a modern JS implementation of the fundamental classes in the JDK (Java Development Kit), which I got the inspiration to do from [java2javascript](https://github.com/java2script/java2script) by @BobHanson, @zhourenjian, @abego, and others.

## Contribute

I've only done a partial implementation of the Java 17 JDK in JavaScript, so if you're interested in adding more please go for it and submit a pull request!

## Commercial Use

This project is licensed under the copyleft GNU GENERAL PUBLIC LICENSE 3.0 (only) license. If you'd like to request legal permission to use this code in a commerical product or closed source project please email me (qashto@gmail.com) with a proposal of how you would like to use `java2js`.
