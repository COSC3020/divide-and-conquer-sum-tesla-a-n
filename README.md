# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Let T(n) be the time complexity for sorting an array of size n.

The algorithm Divides, Conquers, and then Combines the array(s)

The combining of elements or merging of elements happens recursively by adding the results
at each recursive level.

     If the array is empty, it returns 0 because there are no elements to sum,
     
     if the array has one element, it returns that element as the sum
     
     if the array has two elements, it returns the sum of those two integers as a basecase
     to avoid further splitting.
     
     After the subarrays are divided, each element is merged with what is left in the 
     left, mid, or right subarray, accumulating the sum until the origional array's sum
     is calculated at the top level.
     
Divide splits the array into 3 sub-arrays which would each be about n/3 (constant time)

Conquer recursively sorts the three sub-arrays so 3*T(n/3)

Combine takes O(n) time because we are merging n elements

T(n) = 3T(n/3) + O(n) = 3T(n/3) + n

     = 3 [ 3T(n/9) + n/3 ] + n
     
     = 9T(n/9) + 3(n/3) +n
     
     = 9T(n/9) + 2n
     
After expanding again, it comes to T(n) = 3^(k)T(n/3^(k)) + kn
base case happens when n/3^(k) = 1 which then gives n = 3^(k) so solving for k, we get:

  k=log(base 3)n , T(1) = O(1)
  
Substituting k into the recurrence;

  T(n) = 3^(log(base 3))T(1) + (log(base 3)n) * n
  
       = n * O(1) + n * log(base 3)n
       
       = O(nlog(base 3)n)
       
Overall, the time complexity is: $\Theta$ (nlogn) just like regular merge sort
because even though the array is split into three subarrays instead of two, the difference
in log base doesn't affect the complexity significantly so both of them have the same asymptotic 
complexity

Sources: https://www.w3schools.com/jsref/jsref_reduce.asp for reduce knowledge and syntax help
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

