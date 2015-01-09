## Exercise: Favorite Letter
Write a program that asks the user for their favorite letter.
Take the following array and return only the names that contain that letter (using select).

```names = ["Janet", "Wilber", "Dominique", "Carli", "Pinkie", "Pietro", "Devyn", "Heaven", "Oma", "Astrid"]```

For example, if I enter in J, it would return `["Janet"]`

**Bonus 1:** Print each matching name on its own line using each.

**Bonus 2:** Do this in JavaScript

## Exercise: Hip to be Square
Write a program that will prompt the user for a number and print out that number squared.
For example: The user enters 3 and the program prints out 9 (3^2).

**Hint:** Exponents in Ruby look like this:
```rb
3 ** 2
```

**Bonus:** Do this in JavaScript.  You will need `Math.pow(base,exponent)`.  This looks like `Math.pow(3,2)`

## Excercise: Map to the power of 2
Write a program that will prompt the user for a number until the user enters ```end```.
The program will add each element to an array and print out the array with each element squared.

For example:
```
1
2
3
end
[1, 4, 9]
```

**Note:** You have to use map. Don't just square each number before putting it into the array.

**Bonus 1:** Print out each element in that array on its own line.

**Bonus 2:** Do this in JavaScript

## FizzBuzz
Write a ruby command line application that prints the numbers 1 - 100 to the terminal.
- If a number is divisible by 3, print the word fizz that number many times.
- If a number is divisible by 5, print the word buzz. The word buzz should have that number many "z"s.
- If a number is divisible by both 3 and 5, print the string "fizzbuzz again? really?"

##Madlibs
- Write a command line application in ruby that asks the user for a list of adjectives, a list of verbs, and a list of nouns.
- Using the following script, have a random adjective from the user's list of adjectives replace the word ADJECTIVE, replace the word VERB using the verbs provided by the user in order, and replace the word NOUN with the nouns provided by the user in reverse order.
- If the user's lists are too short repeat the words from the appropriate list.

```
"Here's the NOUN of a ADJECTIVE NOUN
Who was VERBing up three very ADJECTIVE NOUNs.
All of them had NOUN of ADJECTIVE, like their NOUN,
The ADJECTIVE one in NOUN.

Here's the NOUN, of a NOUN named NOUN,
Who was busy with three NOUNs of his own,
They were four NOUNs, VERBing all together,
Yet they were all ADJECTIVE.

Till the one day when the NOUN met this NOUN
And they knew it was much more than a NOUN,
That this NOUN must somehow VERB a NOUN.
That's the way we all VERB the ADJECTIVE NOUN."
```
