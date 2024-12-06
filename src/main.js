import linkedList from './script';

let l1 = new linkedList();
console.log(l1.size());

l1.append("Chihuahua");
console.log(l1.size());

l1.append("Pitbull");
console.log(l1.size());

l1.append("Rotwieller");

l1.append("Belgium sheperd");

l1.append("Dorbamon");

l1.prepend("Husky");
l1.prepend("Golden retreiver");
console.log(l1.size());
console.log(l1.view_head());
console.log(l1.view_tail());
console.log(l1.at_index(0));
console.log(l1.at_index(1));
console.log(l1.at_index(2));
console.log(l1.at_index(20));
l1.pop();
console.log(l1.contains("Husky"));
console.log(l1.contains("Labrador"));
console.log(l1.contains("Dorbamon"));
console.log(l1.find("Dorbamon"));
console.log(l1.find("Pitbull"));
console.log(l1.find("Pomanarian"));
console.log(l1.to_string());
let l2 = new linkedList();
console.log(l2.to_string());
l1.removeAt(1);
console.log(l1.to_string());
l1.removeAt(0);
console.log(l1.to_string());