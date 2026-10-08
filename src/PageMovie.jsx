import {Link} from 'react-router-dom'
import './PageMovie.css'
function PageMovie(){
    return(
        <div className="schelude_videos">
            <h1>🗓️TODOS LOS VIDEOS</h1>
            <p>Videos disponibles:</p>
            <div className="box_video">
                <iframe 
                    src="https://www.youtube.com/embed/9q_80aIFXfY" 
                    title="Video 1"
                    className="video-yt"
                    allow="autoplay"
                />
                <iframe 
                    src="https://www.youtube.com/embed/snmY2zNMAv8" 
                    title="Video 2"
                    className="video-yt"
                    allow="autoplay"
                />
            </div>
            
            
            <Link to="/" className="schelude_link_regresar" style={{ color: '#ec0826', fontWeight: 'bold' }}>
                ← Volver al Inicio
            </Link>
        </div>
    );
};
export default PageMovie;