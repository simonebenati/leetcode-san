### Notes
Note that in js you cannot dereference like in c, therefore this is the method to update in place the array:

```js
nums.length = 0;
nums.push(...expectedNums);
```