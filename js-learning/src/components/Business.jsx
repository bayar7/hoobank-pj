import { features } from "../constants";
import styles, { layout } from "../style";
import Button from './Button';

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}></div>
        <h2 className={styles.heading2}>You do business,<br className="sm:block hidden"/> we'll handle the money.</h2>
        {/* max-w-[470px] makes the paragraph text into a easy-to-read text block */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can imporve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
    </section>
  )
}

export default Business