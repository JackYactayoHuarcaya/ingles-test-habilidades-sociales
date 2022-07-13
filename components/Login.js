import Articles from "./Article.js";
let Login = () => {
  const d = document;
  let $loginButton;
  let $containerFondo = d.querySelector(".container-fondo-img");
  let textRes = d.querySelector(".text-res");
  let inglesEspañol;
  let funcionDatos = async (el, url, fun) => {
    let bodyContainer = await fetch(url);
    let text = await bodyContainer.text();
    el.innerHTML = text;
    $loginButton = d.querySelector(".button-login-for-article");
    if (fun === true) {
      if (url == "./html/bodyAsertividad.html") {
        // <!-- 1-12 -->
        Articles(1, 12,inglesEspañol);
      } else if (url == "./html/bodyComunicacion.html") {
        // <!-- 13-21 -->
        Articles(13, 21,inglesEspañol);
      } else if (url == "./html/bodyAutoestima.html") {
        // <!-- 22-33 -->
        Articles(22, 33,inglesEspañol);
      } else if (url == "./html/bodyTomaDecisiones.html") {
        // <!-- 34-42 -->
        Articles(34, 42,inglesEspañol);
      } else if (url == "./html/bodyResultados.html") {
        textRes.style.display="block"
      }
      $containerFondo.src = "./public/circle.jpg";
    }
  };
  d.querySelectorAll("[data-bodyContainer]").forEach((el) => {
    funcionDatos(el, el.getAttribute("data-bodyContainer"));
  });
  // click cambio----login ---------------------
  d.addEventListener("click", (e) => {
    if (e.target.name == "pre") {
      if (e.target.id == "question") {
        $loginButton.textContent = "Go";
      } else if (e.target.id == "preguntas") {
        $loginButton.textContent = "Vamos";
      }
      if($loginButton.textContent == "Go"){
        inglesEspañol = "ingles"
      }else if($loginButton.textContent == "Vamos"){
        inglesEspañol = "español"
      }
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(".button-login-for-article")) {
      e.preventDefault();
      d.querySelectorAll("[data-bodyContainer]").forEach((el) => {
        funcionDatos(el, e.target.id, true);
      });
    }
  });
};
export default Login;
