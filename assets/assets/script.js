```javascript
// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if(toggle){
toggle.addEventListener('click', ()=>{
nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
});
}


// Simple Add to Cart placeholder
document.addEventListener('click', e=>{
if(e.target.matches('.btn.primary') && e.target.tagName === 'BUTTON'){
alert('Added to cart (demo)');
}
});
```
