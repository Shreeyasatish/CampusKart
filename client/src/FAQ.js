import React, { useState } from "react";
import Faq from "react-faq-component";
import "./faq.css"; // Import the CSS file

const data = {
  rows: [
    {
      title: "What is the duration of the rental period?",
      content: `The maximum rental period is one month. So, if you order for rent on the 19th of a month, you can rent it until the last day of that particular month.`,
    },
    {
      title: "What is the return process for rented items?",
      content: `For the return of items, you will have to come to the CampusKart Mart and return the item. In case the item is not returned on the due date, then it will be extra charged on a per day basis.`,
    },
    {
      title: "What happens if the item I purchased or rented is damaged or faulty?",
      content: `We will certainly make sure to replace it. You can contact our customer care number at +91-9876787654 or email us at campuskart23pes@gmail.com, and our volunteers will reach out to you soon.`,
    },
    {
      title: "Do you provide any warranty for the products?",
      content: `Yes, if the purchased item has a warranty, we make sure to not only provide the warranty but also offer free repair of electronic products purchased from CampusKart, irrespective of their warranty.`,
    },
  ],
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">FAQs</h1>
      <Faq
        data={data}
        styles={{
          bgColor: "white",
          titleTextColor: activeIndex !== null ? "darkblue" : "rgba(0, 0, 139, 0.8)", // Dark blue when active, otherwise darker blue
          rowTitleColor: activeIndex !== null ? "rgba(0, 0, 139, 0.4)" : "darkblue", // Darker blue when active, otherwise dark blue
          rowContentColor: "rgba(0, 0, 139, 0.8)", // Darker blue
          arrowColor: "black",
        }}
        onClick={handleClick}
        activeIndex={activeIndex}
      />
    </div>
  );
};

export default FAQ;