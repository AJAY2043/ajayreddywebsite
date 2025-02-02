import React, { useState } from "react";
import "./FAQ.css"; // Add your custom styles here
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data
  const faqs = [
    {
      question: "What services do you provide?",
      answer: "I provide modern front-end web development using React.js, HTML, CSS, and JavaScript. I focus on creating responsive and interactive websites.",
    },
    {
      question: "How can I contact you?",
      answer: "You can contact me via email at ajaykreddy1.akr@gmail.com or through my LinkedIn profile.",
    },
    {
      question: "Do you work on freelance projects?",
      answer: "Yes, I work as a freelance web developer. I offer custom solutions for clients based on their requirements.",
    },
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in React.js, JavaScript, HTML, CSS, and various front-end frameworks and libraries.",
    },
  ];

  const handleToggle = (index) => {
    if (index === openIndex) {
      setOpenIndex(null); // If the same question is clicked, it closes
    } else {
      setOpenIndex(index); // Open a new FAQ
    }
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => handleToggle(index)}
            >
              <span className="faq-icon">
                {openIndex === index ? (
                  <FaMinus />
                ) : (
                  <FaPlus />
                )}
              </span>
              <h3>{faq.question}</h3>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
