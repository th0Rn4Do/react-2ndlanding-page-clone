import styles from './App.module.scss';
import { ReactComponent as CalmLogoGradient } from './images/calmLogoGradient.svg';

export default function App() {
  return (
    <>
      <body className={styles.body}>
        <header className={styles.header}>
          <nav ClassName={styles.headerContent}>
            <a ClassName={styles.logoURL} href="/#">
              <div>
                <CalmLogoGradient />
              </div>
            </a>
            <a ClassName={styles.amzLogoURL} href="/#">
              <div>Amazon Purchase Button</div>
            </a>
          </nav>
        </header>
        <main>
          <p>main content</p>
        </main>
        <footer>
          <p>my footer</p>
        </footer>
      </body>
    </>
  );
}
