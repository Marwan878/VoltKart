import { FEATURES1 } from "@constants";
import { RevealOnScroll } from "@components/ui";

import styles from "./styles.module.css";

export default function Features1() {
  return (
    <ul
      className={`container d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4 ${styles.features1}`}
    >
      {FEATURES1.map((feature) => (
        <RevealOnScroll key={feature.heading}>
          <li className="d-flex align-items-center justify-content-center">
            <img src={feature.imageUrl} alt="" />
            <div className="d-flex flex-column">
              <h4>{feature.heading}</h4>
              <p>{feature.body}</p>
            </div>
          </li>
        </RevealOnScroll>
      ))}
    </ul>
  );
}
