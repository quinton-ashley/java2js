# Java to Javascript for QuintOS

I've built on top of the "Java to Javascript" transpiler by @wyattades and got inspiration from the JavaDevelopmentKit implementation in "java2javascript" by @BobHanson and others.

The purpose of this project was to allow intro level CS students to write Java code but still use my QuintOS library which is web based instead of just having them run their programs in a Java console which is boring. I made a barebones JavaDevelopmentKit implementation in modern Javascript to acheive this.

## Known limitations

- casting to int truncation workaround requires parenthesis around the number being cast

- no support for method overloading, though a workaround could be made by making a function with the og name route to each of the variations of the overloaded function

- no support for private/public methods, though this could be done since they are included in modern JavaScript classes

## Contribute

I've only done a barebones implementation of Java 17 JDK, a lot is missing, so if you are interested in adding more please go for it and submit a pull request!
