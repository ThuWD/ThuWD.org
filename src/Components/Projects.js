import styles from './Projects.module.scss'
import Item from './subComponents/Item.js'

const Projects = () => {
    return (
        <div className={styles.projects}>
            <Item title="Website in production" />
        </div>
    )
}
export default Projects;