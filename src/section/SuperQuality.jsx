import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      className="flex justify-between items-center 
    max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2
          className="mt-10 font-palanquin text-4xl capitalize font-bold
          lg:max-w-lg"
        >
          We Provide you {}
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality </span>
          Shoes
        </h2>

        <p
          className="mt-4 lg:max-w-lg info-text"
        >
          Ensuring premium comfort and style, our meticuslously crafted footwear is designed
          to elevate your experience.
        </p>
        
        <div className="mt-11">
        <Button label="View Detail" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8}
        alt="shoe"
        width={570}
        height={5}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
