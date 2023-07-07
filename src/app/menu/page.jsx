import Image from "next/image";
import Style from "./menu.module.css";

const Card = () => {
  return (
    <section className={Style.card}>
      <Image
        src="/image/nosotros_fogon.jpg"
        alt="ruka"
        width="200"
        height="200"
      />
      <h3>Card Title</h3>
      <p>Card Description</p>
      <div className="card-footer">
        <span>Like</span>
      </div>
    </section>
  );
};

export default Card;
