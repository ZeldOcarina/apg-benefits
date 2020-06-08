import "./styles/index.scss";

const form = document.querySelector(".form__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("first_name", document.getElementById("first_name").value);
  formData.append("last_name", document.getElementById("last_name").value);
  formData.append("email", document.getElementById("email").value);
  formData.append(
    "a0832b09-7191-ea11-a9a8-be86afc8905f",
    document.getElementById("zip_code").value
  );

  const req = new XMLHttpRequest();
  req.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    if (data.success)
      window.location.href =
        "https://rewards.americanpowerandgas.com/thank-you";
  });

  req.addEventListener("error", function (err) {
    console.log("ERROR!", err);
  });

  req.open("POST", form.action, true);
  //req.setRequestHeader("Accept", " application/json");
  req.send(formData);
});

document.querySelector(".footer__date").textContent = new Date().getFullYear();
