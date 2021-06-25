import styles from './Item.module.scss'

const Item = (props) => {

    return (
        <a href={props.path} target="_blank" rel="noreferrer">
            <section className={styles.item}>
                <div className={styles.svg}>
                    <img src={props.svg}/>
                </div>
                <div className={styles.title}>
                    {props.title}
                </div>
                <div className={styles.topBar} />
            </section>
        </a>
    )
}

export default Item
