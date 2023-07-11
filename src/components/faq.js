import React, { useState } from 'react';
import * as styles from './FAQ.module.css';

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={`${styles.faq} ${faq.open ? styles.open : ''}`}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <h3 className={styles.faqQuestion}>{faq.question}</h3>
      <p className={styles.faqAnswer} dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
    </div>
  );
};

const FAQs = ({ faqs }) => {
  const [faqsState, setFaqs] = useState(faqs);

  const toggleFAQ = index => {
    setFaqs(faqsState.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }));
  }

  return (
    <div className={styles.faqs}>
      {faqsState.map((faq, i) => (
        <FAQ faq={faq} key={i} index={i} toggleFAQ={toggleFAQ} />
      ))}
    </div>
  );
};

export default FAQs;