import {Link} from 'react-router-dom'
import './PageMovie.css'
function PageMovie(){
    return(
        <div className="schelude_videos">
            <h1>🗓️TODOS LOS VIDEOS</h1>
            <p>Videos disponibles:</p>

            <iframe 
                src="https://drive.google.com/file/d/1qjkB2odiGUMx_pSpWQ_xn7YIy9zShxOU/preview" 
                title="Video Informativo Club Titanes"
                className="video-drive"
                allow="autoplay"
            />
            <Link to="/" className="schelude_link_regresar" style={{ color: '#ec0826', fontWeight: 'bold' }}>
                ← Volver al Inicio
            </Link>
        </div>
    );
};
export default PageMovie;