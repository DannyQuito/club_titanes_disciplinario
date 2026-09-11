import wats from './assets/wats.png'
function Social_media(){
    return (
        <div className="contacts">
            <p>Contacto:</p>
            <a
                href="https://chat.whatsapp.com/DV4U6QK9nBRAFxOJo4rbPK?s=sh&p=a&mlu=4&ilr=4"
                target="_blank"
                rel="noopener noreferrer"
                className="link_wats"
            >
                <img
                    src={wats}
                    alt="Icono WhatsApp"
                    className="img_whatsapp"
                 />
            </a>
            
        </div>
    )
}
export default Social_media;