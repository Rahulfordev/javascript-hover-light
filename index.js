var btn = document.getElementById("btn");
btn.onclick = function(){
 if (btn.classList.contains("ten")) {
    btn.classList.remove("ten");
    btn.innerHTML = "Hello";
 }else {
   btn.classList.add("ten");
   btn.innerHTML = "Rahul";
 }
}
