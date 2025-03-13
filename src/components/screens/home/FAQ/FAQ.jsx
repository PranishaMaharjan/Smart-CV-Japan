import { Link } from "react-router-dom";
import { Images } from "../../../../assets/images";
import "./FAQ.scss";
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Data for the itemdion
  const items = [
    {
      title: "Who can register on Smart CV Japan?",
      content:
        "Any Nepali candidate seeking jobs in Japan under SSW, TITP, or University Graduate visas or register.",
    },
    {
      title: "What documents are required during registration?",
      content: "This is the content for section 2.",
    },
    {
      title: "How is the resume generated?",
      content: "This is the content for section 3.",
    },
    {
      title: "Can candidates edit their profiles after registration?",
      content: "This is the content for section 3.",
    },
    {
      title: "Does Smart CV Japan offer consultancy support?",
      content: "This is the content for section 3.",
    },
  ];

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      <h3>Frequently Asked Questions</h3>
      {items.map((item, index) => (
        <div key={item.title} className="accordion-item">
          <div className="accordion-title" onClick={() => onTitleClick(index)}>
            <div>{item.title}</div>
            <div className={`caret ${activeIndex === index ? "rotate" : ""}`}>
              ^
            </div>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
