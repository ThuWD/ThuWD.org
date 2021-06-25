import styles from './Projects.module.scss'
import Item from './subComponents/Item.js'
import genPath from './genPath'
import vynill from '../svgs/vinyll.svg'

const Projects = () => {
    return (
        <div className={styles.projects}>
        <Item title="AudioNet" path={genPath.audioNet()} svg={vynill}/>
        <Item title="AudioNet" path={genPath.audioNet()} svg={vynill}/>
        </div>
    )
}
export default Projects;