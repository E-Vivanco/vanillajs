/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let generaExcusa = () => {
  let quien = [
    "Mi perro",
    "El gato",
    "El auto",
    "El niño",
    "Mi Hermano",
    "Mi canario"
  ];
  let accion = ["rompio", "aplasto", "destrozo", "perdio", "borro", "ensucio"];
  let que = ["mi tarea", "mi Notebook", "mi telefono", "mi pc", "mi llave"];
  let cuando = ["hoy", "ayer", "la semana pasada", "hace 2 dias", "hace 1hr"];

  let uno = parseInt(Math.floor(Math.random() * quien.length));
  let dos = parseInt(Math.floor(Math.random() * accion.length));
  let tres = parseInt(Math.floor(Math.random() * que.length));
  let cuatro = parseInt(Math.floor(Math.random() * cuando.length));
  return (
    quien[uno] + " " + accion[dos] + " " + que[tres] + " " + cuando[cuatro]
  );
};
window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#My-resp").innerHTML = generaExcusa();
  });
};
//console.log("Hello Rigo from the console!");
