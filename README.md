# radix-sort-arrays

ALGO EXPERT HARD

Write a function that takes in an array of non-negative integers and returns a sorted
version of the array. Use the Radix Sort algorithm to sort the array.

The way radix sort works is it will loop through the array and compare each value at each 
digit and sort them, then repeat the process for every other digit that exists in the input
array. Given the input array below, the maximum number of digits found is 4, so the algorithm
will loop through 4 times in order for it to sort from start to finish.


Sample input: array = [8762, 654, 3008, 345, 87, 65, 234, 12, 2]<br>
Sample output: sorted = [2, 12, 65, 87, 234, 345, 654, 3008, 8762]<br>
