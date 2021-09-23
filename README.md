# Java to Javascript for QuintOS

I've built on top of the "Java to Javascript" transpiler by @wyattades and got inspiration from the JRE implementation in "java2javascript" by @BobHanson and others.

The purpose of this project was to allow intro level CS students to write Java code but still use my QuintOS library which is web based instead of just having them run their programs in a Java console which is boring. I made a barebones JRE implementation in modern Javascript to acheive this.

## Known limitations

- casting to int requires putting the element being cast in parenthesis

- no support for method overloading
