import { useState } from "react";
//Importamos el archivo de CSS
import "./App.css";
import Ares from "./assets/ares.png";
import Artemisa from "./assets/artemisa.png";
import Atenea from "./assets/atenea.png";
import Hades from "./assets/infierno.png";
import Poseidon from "./assets/poseidon.png";
//Es nuestro componente principal
//Es una funcion

const principal = {
  backgroundColor: "#512DA8",
  display: "flex",
  "flex-direction": "column",
  minHeight: "100vh",
  color: "#FFFFFF",
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  "font-family": "sans-serif",
};
const menu = {
  display: "flex",
  "flex-direction": "row",
  justifyContent: "space-around",
  margin: "16px",
  padding: "8px",
  backgroundColor: "#BDBDBD",
  "list-style-type": "none",
  "border-radius": "8px",
};
const menuItem = {
  padding: "16px",
  "border-radius": "8px",
  "background-color": "#009688",
  "box-shadow": "0 0 5px rgba(0,0,0,0.2)",
  cursor: "pointer",
  transition: "all 0.3s",
  margin: "5px",
  color: "black",
  justifyContent: "center",
  alignItems: "center",
  "flex-direction": "row",
  textAlign: "center",
};
const main = {
  display: "flex",
  flex: "1",
  margin: "8px",
  flexGrow: 1,
};
const lateral = {
  backgroundColor: "#BDBDBD",
  "border-radius": "4px",
  padding: "4px",
  width: "20%",
  float: "left",
  color: "#212121",
  "font-size": "1.5em",
  display: "flex",
  justifyContent: "center",
  "margin-right": "10px",
};

const contenido = {
  backgroundColor: "#D1C4E9",
  padding: "8px",
  width: "75%",
  float: "left",
  "border-radius": "8px",
  color: "black",
  flex: "2",
};

const pie = {
  backgroundColor: "#333",
  color: "black",
  justifyContent: "center",
  "margin-top": "8px",
  width: "100%",
  padding: "8px",
};

const imgStyle = {
  width: "50px",
  height: "auto",
  objectFit: "cover",
};

const imgAsideStyle = {
  width: "100%", // Ajusta la imagen al ancho del aside
  height: "100%", // Ajusta la altura al 100% del contenedor
  objectFit: "contain", // Evita que la imagen se deforme
  borderRadius: "8px", // Mantiene el borde redondeado de la imagen
};

const arrTitulo = [
  "Cultura Digital",
  "Diseño de Software de Sistemas de Información",
  "Implementación de Software de Sistemas de Información",
  "Codificación de Software de Sistemas de Información",
  "Aplicación de Metodologías Ágiles",
  "Frameworks",
  "Implementación de Bases de Datos",
  "Implementación de Datos Relacionales",
  "Implementación de Aplicaciones Web",
  "Construye Aplicaciones Web"
];

const arrTexto = [
  "Uso básico de herramientas digitales.",
  "Análisis y diseño de sistemas de información.",
  "Desarrollo de software aplicado a sistemas.",
  "Codificación de aplicaciones de software.",
  "Uso de metodologías ágiles para gestión de proyectos.",
  "Uso de frameworks para desarrollo web.",
  "Diseño e implementación de bases de datos.",
  "Uso de SQL y modelos relacionales.",
  "Desarrollo de aplicaciones web frontend.",
  "Creación de proyectos web completos."
];


const CmpHeader = () => {
  return (
    <header style={{ display: "flex", justifyContent: "center" }}>
      <h1>Primer proyecto react</h1>
    </header>
  );
};

const CmpFooter = () => {
  return (
    <footer style={pie}>
      <p>© Proyecto React - Gael Castañeda</p>
    </footer>
  );
};
//props es un  Objeto de JS {JSON}
const CmpMain = (props) => {
  return (
    <main style={main}>
      <aside style={lateral}>
        <img src={props.imgContent} style={imgAsideStyle}></img>
      </aside>
      <section style={contenido}>
        <h2>{props.txtTitle}</h2>
        <p>{props.txtContent}</p>
      </section>
    </main>
  );
};

const CmpNav = (props) => {
  return (
    <nav>
      <ul style={menu}>
        {props.arrTitulo.map((v, i) => {
          return (
            <li key={i} style={menuItem} onClick={() => props.handleClick(i)}>
              <img src={props.arrImagen[i]} style={imgStyle}></img>
              <p>{v}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

function App() {
  //    variable  funcion set     Valor por defecto
  const [titulo, setTitulo] = useState("Titulo");
  const [txtContent, setTxtContent] = useState("Contenido");
  const [imgContent, setImgContent] = useState();

  const handleClick = (i) => {
    setTitulo(arrTitulo[i]);
    setTxtContent(arrTexto[i]);
    setImgContent(arrImagen[i]);
  };

  return (
    <div style={principal}>
      <CmpHeader />
      <CmpNav
        handleClick={handleClick}
        arrTitulo={arrTitulo}
        arrImagen={arrImagen}
      />
      <CmpMain
        txtTitle={titulo}
        txtContent={txtContent}
        imgContent={imgContent}
      />
      <CmpFooter />
    </div>
  );
}
//Exportamos nuestro componente
export default App;
