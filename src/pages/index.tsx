import MainLayout from 'src/layouts/MainLayout';
import styles from '../scss/pages/home.module.scss';

export default function index(): JSX.Element {
  return (
    <MainLayout>
      <article className={styles.article}>
        <h1>
          <strong>
            <dfn>pro-cras-ti-na-tion</dfn>
          </strong>
          <i> |prəˌkrastəˈnāSHən, prō-|</i>
        </h1>
        a noun
        <p>
          the action of delaying or postponing something: your first tip is to
          avoid procrastination.
        </p>
        <br />
        <p>
          Who would have thought that after decades of struggle with
          procrastination, the dictionary, of all places, would hold the
          solution. Avoid procrastination. So elegant in its simplicity.
        </p>
      </article>
    </MainLayout>
  );
}
