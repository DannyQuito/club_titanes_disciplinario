import {Link} from 'react-router-dom'
function Info_one(){
    return(
        <div className="info_box_container">
            <div className="info_lef">
                <Link to="/horarios" className="boton-navegacion">
                    Ver Todos los videos
                </Link>
                <iframe 
                    src="https://drive.google.com/file/d/1qjkB2odiGUMx_pSpWQ_xn7YIy9zShxOU/preview" 
                    title="Video Informativo Club Titanes"
                    className="video-drive"
                    allow="autoplay"
                />
                <div className="text_how">
                    <p>¿QUIENES SOMOS?</p>
                    <p>El club tiene la finalidad de practicar<br/> 
                    varias disciplinas con el fin de fomentar<br/> 
                    la actividad física y deporte. <br/> 
                    El club tiene su horario y puede variar según<br/>
                    los horarios de los integrantes, ya que este club <br/> 
                    fue creado para un trabajo de proyecto de vida.<br/>
                    Lo cual se trabajará de manera variada, tomando<br/>
                    en cuenta las opiniones y consejo de los integrantes,<br/> 
                    también puede preguntar cualquier duda <br/> 
                    que tenga o consejo de técnica qué se emplea.<br/> 
                    Para tener una mejor interacción <br/> 
                    entre integrantes se tomará en cuenta su horario.</p>
                </div>
            </div>
            <div className="info_one">
                <label>REGLAMENTO INTERNO<br/> DE FUNCIONAMIENTO: </label>
                <div>
                    <p>Este reglamento establece las normas de convivencia,<br/>
                    deberes y derechos para asegurar el correcto <br/>
                    comportamiento y orden de los integrantes.</p>
                </div>
                <a
                    href="/document_rule/internal_operating_regulations.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >Reglas Internas</a>
                <label>HORARIO Y ASISTENCIA: </label>
                <div>
                    <p>Regula la puntualidad, registro de entradas y salidas,<br/> 
                    control de ausencias y justificaciones para<br/> mantener la disciplina operativa diaria.</p>
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