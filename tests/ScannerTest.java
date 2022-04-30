package tests;

import java.util.Scanner;

public class ScannerTest {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Hello world!");

		System.out.print("What's your name: ");
		String name = sc.nextLine();
		System.out.println("Hello " + name);

		System.out.print("What's your favorite number: ");
		int age = sc.nextInt();
		System.out.println(age + "? That's my favorite too!");

		sc.close();
	}
}
