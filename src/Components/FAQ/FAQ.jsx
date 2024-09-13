import React, { useState } from 'react';
import down_arrow from '../Assets/dropdown_icon.png';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: 'What is your present status of your startup?', answer: 'Currently, I am in the early development stage, working on building a solid foundation for my business. I’m focused on turning my passion into a scalable project.' },
    { question: 'How do I contact and interact with you?', answer: 'You can reach out me via contact me section in my website. I am also open to personal interactions via professional networking platforms.' },
    { question: 'Do you have knowledge in front-end development?', answer: 'Yes, I specialize in front-end development, particularly using React.js, CSS, and animation libraries to create visually appealing and functional web applications.' },
    { question: 'What is your dream or goal in life?', answer: 'My dream is to launch a successful business that solves real-world problems while utilizing my skills in web development. I aim to grow both personally and professionally through innovation.' },
    { question: 'Are you working at present or looking for a job?', answer: 'At the moment, I am working on my startup & freelance. However, I am open to opportunities that align with my skills and passions.' },
  ];

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => handleToggle(index)}>
              <h3>{faq.question}</h3>
              <img 
                src={down_arrow} 
                alt="Toggle" 
                className={`faq-arrow ${openIndex === index ? 'open' : ''}`} 
              />
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
