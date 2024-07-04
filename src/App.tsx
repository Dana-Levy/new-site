import styles from './App.module.scss';
import Classnames from 'classnames';

function App() {
    return (
        <div className={styles.App}>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1537868525725-76f36c3363c6?q=80&amp;w=3540&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>The Journey of Coffee</h1>
                <p className={styles.date}>29.07.1988</p>
                <p className={Classnames(styles, styles.description)}>
                    Uncover the fascinating journey of coffee from bean to brew. Explore the
                    processes of harvesting, roasting, and brewing that create the diverse flavors
                    and aromas in every cup. Perfect for both casual drinkers and coffee
                    enthusiasts.
                </p>
                <p className={styles.saves}>677 saves</p>
            </div>
        </div>
    );
}

export default App;
