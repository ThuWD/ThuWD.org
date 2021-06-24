import styles from './Projects.module.scss'
import Item from './subComponents/Item.js'

const Projects = () => {
        const genPathAudioNet = () => {
            if (window.location.hostname === "thuwd.org" || window.location.hostname === "www.thuwd.org" || window.location.hostname === "localhost") {
                return "https://audionet.thuwd.org/"
            }
            else if (window.location.hostname === "thuwd-site.web.app" || window.location.hostname === "thuwd-site.firebaseapp.com") {
                return "https://audionet.web.app/"
            }
        }
    return (
        <div className={styles.projects}>
            <Item title="AudioNet" path={genPathAudioNet()}/>
        </div>
    )
}
export default Projects;