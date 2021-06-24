import styles from './Item.module.css'

const Item = (props) => {
    return (
        <section className={styles.item}>
            <div className={styles.title}>
            {props.title}
                </div>
                <div className={styles.topBar} />
            </section>
    )
}

export default Item
