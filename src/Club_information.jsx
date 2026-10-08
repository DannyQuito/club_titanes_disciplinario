import {Link} from 'react-router-dom'
function Info_one(){
    return(
        <div className="info_box_container">
            <div className="info_lef">
                <Link to="/horarios" className="boton-navegacion">
                    Ver Todos los videos
                </Link>
                <iframe 
                    src="https://www.youtube.com/embed/9q_80aIFXfY" 
                    title="Video Informativo Club Titanes"
                    className="video-yt"
                    allow="autoplay"
                />
                <div className="text_how">
                    <p>¿QUIENES SOMOS?</p>
                    <p>
                        El club tiene la finalidad de practicar varias disciplinas con el fin
                        de fomentar la actividad física y deporte. El club tiene su horario y
                        puede variar según los horarios de los integrantes, ya que este club
                        fue creado para un trabajo de proyecto de vida. Lo cual se trabajará
                        de manera variada, tomando en cuenta las opiniones y consejo de los
                        integrantes, también puede preguntar cualquier duda que tenga o
                        consejo de técnica qué se emplea. Para tener una mejor interacción
                        entre integrantes se tomará en cuenta su horario.
                    </p>
                </div>
            </div>
            <div className="info_one">
                <label>REGLAMENTO INTERNO<br/> DE FUNCIONAMIENTO: </label>
                <div>
                    <p>
                        Este reglamento establece las normas de convivencia,
                        deberes y derechos para asegurar el correcto
                        comportamiento y orden de los integrantes.
                    </p>
                </div>
                <a
                    href="/document_rule/internal_operating_regulations.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >Reglas Internas</a>
                <label>HORARIO Y ASISTENCIA: </label>
                <div>
                    <p>
                        Regula la puntualidad, registro de entradas y salidas, 
                        control de ausencias y justificaciones para mantener la disciplina operativa diaria.
                    </p>
                </div>
                <a
                    href="/document_rule/schedule.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >Ver-Horarios</a>
            </div>
        </div>
    )
}
export {Info_one};