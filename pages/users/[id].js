import { useRouter } from "next/router";
import styles from "../../styles.";

export default function () {
  const { query } = useRouter();

  return (
    <div className={styles.user}>
      <h1> User page: {query.id}</h1>
    </div>
  );
}
