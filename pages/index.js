import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("/api/activities")
      .then((response) => response.json())
      .then((json) => setActivities(json.data.allActivities));
  }, []);

  return (
    <div className={styles.container}>
      <div>Data:</div>
      {activities && activities.map((activity) => <p>{activity.name}</p>)}
    </div>
  );
}
