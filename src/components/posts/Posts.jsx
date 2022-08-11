import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      <div className="imgposts1">
      <img className="imgposts2" src="https://i.pinimg.com/originals/a7/47/86/a74786c64c1db21c6a3a4b9f93efd2ee.gif"/>
      <p>Wanda Maximoff es una superheroína ficticia que aparece en los cómics publicados por Marvel Comics. Apareció por primera vez en X-Men #4 y fue creada por Stan Lee y Jack Kirby, debutando en la denominada Edad de Plata de los Cómics.</p>
      </div>

      <div className="imgposts1">
      <img className="imgposts2" src="https://c.tenor.com/nthwGducGpAAAAAC/captain-marvel.gif"/>
      <p>Jackson. Situada en el año 1995, la historia sigue a Carol Danvers, una piloto de la Fuerza Aérea de Estados Unidos, que se convierte en la Capitana Marvel </p>
      </div>

      <div className="imgposts1">
      <img className="imgposts2" src="https://i.pinimg.com/originals/5b/d8/ff/5bd8ff1b342ed586b6661584f5e13065.gif"/>
      <p>Thor es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje, que se basa en la deidad nórdica homónima, es el dios del trueno asgardiano poseedor del martillo encantado, Mjolnir, que le otorga capacidad de volar y manipular el clima entre sus otros atributos sobrehumanos, además de concentrar su poder.</p>
      </div>
      </div>
  );
}
