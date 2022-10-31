let prev = document.getElementById("prev");
let next = document.getElementById("next");

let nameP = document.getElementById("name");
let position = document.getElementById("position");
let testimony = document.getElementById("testimony-text");
let profile = document.getElementById("profile-img");
let main = document.querySelector("main");

console.log(main);
next.addEventListener("click", () => {
  testimony.innerHTML =
    "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";

  nameP.innerHTML = "John Tarkpor";
  position.innerHTML = "Junior Front-end Developer";
  profile.src = "../image/image-john.jpg";
});

prev.addEventListener("click", () => {
  testimony.innerHTML =
    "“  I’ve been interested in coding for a while but never taken the jump, until now. I  couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.  ”";

  nameP.innerHTML = "Tanya Sinclair";
  position.innerHTML = "UX Engineer";
  profile.src = "../image/image-tanya.jpg";
});
