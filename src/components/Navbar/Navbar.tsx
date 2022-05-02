import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import Logo from 'public/logo.svg';
import Burger from 'public/burger.svg';
import Close from 'public/close.svg';
import { useState } from 'react';

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.container}>
          {/* content that will be shown when screen is big. shows links in the left, logo & login in the right */}
          <div className={styles.left}>
            <nav>
              <ul className={styles.links}>
                <li>
                  <Link href="/pomodoro">
                    <a>Pomodoro</a>
                  </Link>
                </li>
                <li>
                  <Link href="/todo">
                    <a>Todo</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.right}>
            <div className={styles['sign-in']}>
              <Link href="/login">
                <a>Sign in</a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a className={styles['logo-link']}>
                  Stay On Track
                  <div className={styles.logo}>
                    <Image src={Logo} alt="logo" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* content that will be shown when screen is small. Shows burger menu on the right and the logo in the middle */}
          <div></div>
          <div className={styles['center-small']}>
            <Link href="/">
              <a className={styles['logo-link']}>
                <div className={styles.logo}>
                  <Image src={Logo} alt="logo" />
                </div>
              </a>
            </Link>
          </div>
          <div className={styles['right-small']}>
            <button onClick={() => setIsOpen(!isOpen)}>
              <Image
                src={isOpen ? Close : Burger}
                alt={isOpen ? 'close menu x' : 'open menu burger'}
              />
            </button>
          </div>
        </div>
      </header>
      {/* when burger menu is opened */}
      {isOpen && (
        <div className={styles.menu}>
          <div className={styles['menu-items']}>
            <div className={styles['menu-links']}>
              <Link href="/pomodoro">
                <a>Pomodoro</a>
              </Link>
              <Link href="/todo">
                <a>Todo</a>
              </Link>
            </div>
            <div className={styles['menu-sign-in']}>
              <Link href="/login">
                <a>Sign in</a>
              </Link>
            </div>
          </div>
          <div className={styles.blur}></div>
        </div>
      )}
    </>
  );
}
