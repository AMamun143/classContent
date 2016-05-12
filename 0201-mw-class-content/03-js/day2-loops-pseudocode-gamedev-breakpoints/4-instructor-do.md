* this is how a for loop works step by step:

1. i = 0
2. is 0 less than 5
3. yes, so do what's inside of the for loop
4. increment i to 1
5. is 1 less than 5
6. yes, so do what's inside of the for loop
7. increment i to 2
8. is 2 less than 5
9. yes, so do what's inside ofthe for loop
10. increment i to 3
11. ... keep going until you can't ...

```
var coolKids = ['Eric', 'Blake', 'Emily', 'Xena', 'Boris'];

for(var i = 0; i < coolKids.length; i++){
	alert(coolKids[i]);
}
```