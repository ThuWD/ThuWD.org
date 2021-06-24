import styles from './Projects.module.scss'
import Item from './subComponents/Item.js'
import { genPathAudioNet } from './genPath'
import vynill from '../svgs/vinyll.svg'

const Projects = () => {
    return (
        <div className={styles.projects}>
            <Item title="AudioNet" path={genPathAudioNet()} svg={vynill}/>
        </div>
    )
}
export default Projects;