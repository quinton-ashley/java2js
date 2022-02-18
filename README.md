# Java to JavaScript (java2js)

`java2js` can translate simple Java programs to JavaScript and runs them using a JavaScript based JDK.

I made significant improvements to the [java-to-javascript](https://github.com/wyattades/java-to-javascript) transpiler by @wyattades. I also did a modern JS implementation of the fundamental classes in the JDK (Java Development Kit), inspired by [java2javascript](https://github.com/java2script/java2script) by @BobHanson, @zhourenjian, @abego, and others.

I created this project so intro level computer science students could write Java code but still use my [QuintOS](https://github.com/quinton-ashley/quintos) retro game engine library, which is web based.

## Java Classes Included in the JS JDK

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

## API

### await jdk.init(root)

- root (optional) path to the parent folder of the JS `jdk` folder, by default it is `./` you could also link to this package online 'https://unpkg.com/java2js'

This function imports much of the standard Java lang classes into the global scope. You must use it before translating or running files.

### await jdk.translate(javaFile)

- javaFile is a string with contents of a Java file

returns the Java file translated into JavaScript

### jdk.load(translatedJSFile)

- translatedJSFile is the translated JS class to run

Loads the JS class file but doesn't run the main method.

### jdk.run(jvmArgs)

Runs the main method with optional JVM arguments.

## Features

- imports
- static classes
- static methods
- array literals
- arrays with initial size
- two dimensional arrays
- lambda arrow functions
- triple quotes

## Known limitations

- not very good error reporting

- casting to int (truncation) requires parenthesis around the number being cast `int x = (int) (Math.random() * 100);`

- no support for method overloading, though a workaround might be possible by making a function with the og name route to each of the variations of the overloaded function

- no support for private/public methods yet, though this could be done since they are included in modern JavaScript classes

- no three dimensional arrays

- no third level static classes

- no method can be named `.length()` because it will be replaced with `.length` for getting the length of Strings in JS

## Contribute

I've only done a partial implementation of the Java 17 JDK in JavaScript, so if you're interested in adding more please go for it and submit a pull request!
