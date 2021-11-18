# Java to Javascript for QuintOS

I've built on top of the [java-to-javascript](https://github.com/wyattades/java-to-javascript) transpiler by @wyattades and got inspiration from the JDK (Java Development Kit) implementation in [java2javascript](https://github.com/java2script/java2script) by @BobHanson, @zhourenjian, @abego, and others.

My purpose in creating this project is to allow intro level CS students to write Java code but still use my [QuintOS](https://github.com/quinton-ashley/quintos) retro game engine library which is web based. Yes, I went to all this trouble just so some teenagers don't have to run their programs in a boring Java console! I made a barebones JDK implementation in modern Javascript to acheive this.

## API

### jdk.init(root)

- root is the local path or url to the parent folder of the jdk, by default it links to 'https://unpkg.com/java2js' (this package) so you don't need to change it

This function imports much of the standard Java lang classes into the global scope. You must use it before translating or running files.

### jdk.translate(javaFile)

- javaFile is a string with contents of a Java file

returns the Java file translated into JavaScript

### jdk.run(translatedJSFile)

- translatedJSFile is the translated JS class to run

## Known limitations

- casting to int truncation workaround requires parenthesis around the number being cast

- no support for method overloading, though a workaround might be possible by making a function with the og name route to each of the variations of the overloaded function

- no support for private/public methods yet, though this could be done since they are included in modern JavaScript classes

## Contribute

I've only done a barebones implementation of Java 17 JDK, a lot is missing, so if you are interested in adding more please go for it and submit a pull request!
