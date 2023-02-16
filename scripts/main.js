const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/sun-bear.jpeg") {
    myImage.setAttribute("src", "images/my-lax-photo.jpg");
  } else {
    myImage.setAttribute("src", "images/sun-bear.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = () => {
  setUserName();
};

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    myName = "Stranger"
  }

  localStorage.setItem("name", myName);
  myHeading.textContent = `Welcome, ${myName}`;
  
}

