1. line 12 will print 3 because i is still in scope as it was declared using "var"
2. line 13 will print 150 because that is the last value assigned to discountedPrice and it is still in scope becayse it was declared using var.
3. line 14 will print 150 because that was the last value assigend to final price.
4. the function will return the array [50, 100, 150] because the function was designed to discount the values in the array to the percent represented by the the variable discount, which in this case was 50%.
5. line 5 will cause an error because i is out of scope.
6. line 13 will cause an error beacuse line discountedPrice is out of scope
7. line 14 will print 150, because finalPrice was declared outside of the for loop, and 150 was the last value assiged to it
8. the function will return the array [50, 100, 150] because the function returns the value of each element in the original array multiplied by the value of the second parametar, and this is the original array times 0.5
9. line 11 will cause an error becayse i is out of scope
10. line 12 will print 3 beacuse that is the value length was set too
11. the function will return the array [50, 100, 150] because the function returns the value of each element in the original array multiplied by the value of the second parametar, and this is the original array times 0.5
12. A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
13. A.'3' + 2 = 32 because 2 is treated as a string and is then appended to '3'
    B. '3' -2 = 1 because '3' is converted to a number then 1 is subtracted from it
    C. 3 + null is = 0 because null is converted to 0
    D. '3' + null = 3null because null is converted to a string then appended to '3'
    E. true + 3 = 4 beacuse true is converted to 1 then 3 is added to it
    F. false + null = 0 becayse false and null are converted to 0 then added to each other
    G. '3' + undefined = 3undefined because undefined is converted to a string then appended to '3'
    H. '3' - undefined = 3 is converted to a number as there is no subtracting from strings and undefined is converted to NaN because it cannot be converted to a number resulting in NaN
14. A. '2' > '1' is true becuase 2 has a higher character value than '1'
    B. '2' > '12' is false because '2' has a higher character value than '1'
    C. 2 == '2' is true because '2' is converted to a number and 2 == 2 is true
    D. 2 === '2' is false because 2 and '2' are different types
    E. true == 2 is false because true is converted to 1 and 1 == 2 is false
    F. true === Boolean(2) is true because Boolean(2) evaluates to true and true === true is true.

15. the == operator will check for equality with type conversions, while === will also check if they are   the same type
17. the function will return a new array with values [2, 3, 6] because the function will first create a new array, then for each element in the passed in array is used as a parametar to the callback function which will double said number. Then the newly doubled number is added to the array, resulting in the array [2, 3, 6]
18. 1
    4
    3
    2
