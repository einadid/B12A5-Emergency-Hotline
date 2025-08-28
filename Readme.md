# 1. What is the difference between getElementById, getElementsByClassName, and querySelector, querySelectorAll?
## Ans: 

**getElementById("idName")**

শুধু id দিয়ে element খুঁজে বের করে।
সবসময় একটিমাত্র element ফেরত দেয়, কারণ একটি id একবারই থাকে।


**getElementsByClassName("className")**

class দিয়ে element খোঁজে।
একসাথে একাধিক element ফেরত দিতে পারে (HTMLCollection আকারে)।


**querySelector / querySelectorAll("cssSelector")**

CSS selector ব্যবহার করে element খোঁজে।
শুধু প্রথম মিলে যাওয়া element ফেরত দেয়।


**querySelectorAll("cssSelector")**

CSS selector ব্যবহার করে element খোঁজে।
সব মিলিয়ে যাওয়া element ফেরত দেয়।



# 2. How do you create and insert a new element into the DOM?
## Ans: 

JavaScript এ নতুন element তৈরি করা যায় document.createElement() দিয়ে, তারপর তার content বা attribute সেট করে appendChild() বা append() ব্যবহার করে DOM এ বসানো হয়।

let newElement = document.createElement("p");
newElement.textContent = "This is new paragraph";
document.body.appendChild(newElement);

# 3. What is Event Bubbling and how does it work?
## Ans: 

Event Bubbling মানে হলো কোনো event (যেমন: click) যখন ঘটে, তখন সেটি প্রথমে inner element এ কাজ করে এবং ধাপে ধাপে তার parent, grandparent পর্যন্ত চলে যায়। যদি একটা <button> এর ভেতরে click হয়, তাহলে click event আগে button এ, তারপর div (parent) এ, তারপর body (grandparent) এ যাবে।


# 4. What is Event Delegation in JavaScript? Why is it useful?
## Ans: 

Event Delegation হলো parent element এ event listener বসানো, যাতে তার child element গুলোতে event handle করা যায়। এতে আলাদা আলাদা করে প্রতিটি child এ listener বসাতে হয় না।

**Useful কারণ:** 
Performance ভালো থাকে (কম event listener লাগে)। Dynamic element (নতুন child যোগ হলে) এর জন্যও কাজ করে।


# 5. What is the difference between preventDefault() and stopPropagation() methods?
## Ans: 

**preventDefault()**

কোনো element এর ডিফল্ট কাজ থামায়।
যেমন: form submit হওয়া, link redirect হওয়া।

**stopPropagation()**

Event bubbling বা capturing বন্ধ করে দেয়।
মানে event parent এ গিয়ে আর কাজ করবে না।


