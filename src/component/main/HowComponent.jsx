import { useState } from 'react';
import StepComponent from './how_component/StepComponent';

const HowComponent = () => {
  const [itemList, setItemList] = useState([
    {
      fontawesomeIcon: 'fa-solid fa-magnifying-glass',
      heading: 'Find your artist',
      description: 'Use our search engine to find any artist easily',
      iconTheme: 'icon--yellow',
    },
    {
      fontawesomeIcon: 'fa-solid fa-calendar-days',
      heading: 'Book and pay',
      description: 'Schedule your artist and pay safely here',
      iconTheme: 'icon--red',
    },
    {
      fontawesomeIcon: 'fa-solid fa-champagne-glasses',
      heading: 'Enjoy the show!',
      description: "Sit back and relax knowing it's all done",
      iconTheme: 'icon--purple',
    },
  ]);

  return (
    <section className="how-container">
      <h3 className="how-heading">How It Works</h3>

      <div className="steps-container">
        {itemList.map((item, index) => (
          <StepComponent key={index} {...item} />
        ))}
      </div>

      <p className="more-info">
        More info <i className="fa-solid fa-chevron-right more-info-icon"></i>
      </p>
    </section>
  );
};
export default HowComponent;
