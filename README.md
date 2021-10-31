# Java to Javascript for QuintOS

I've built on top of the [java-to-javascript](https://github.com/wyattades/java-to-javascript) transpiler by @wyattades and got inspiration from the JDK (Java Development Kit) implementation in [java2javascript](https://github.com/java2script/java2script) by @BobHanson, @zhourenjian, @abego, and others.

My purpose in creating this project is to allow intro level CS students to write Java code but still use my QuintOS library which is web based. Yes, I went to all this trouble just so some teenagers don't have to run their programs in a boring Java console! I made a barebones JDK implementation in modern Javascript to acheive this.

## Known limitations

- casting to int truncation workaround requires parenthesis around the number being cast

- no support for method overloading, though a workaround could be made by making a function with the og name route to each of the variations of the overloaded function

- no support for private/public methods, though this could be done since they are included in modern JavaScript classes

## Contribute

I've only done a barebones implementation of Java 17 JDK, a lot is missing, so if you are interested in adding more please go for it and submit a pull request!
