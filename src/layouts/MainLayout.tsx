import Navbar from 'src/components/Navbar/Navbar';
import styles from './MainLayout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <div className={styles.wrapper}>
        <Navbar></Navbar>
        <div className={styles['main-wrapper']}>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
