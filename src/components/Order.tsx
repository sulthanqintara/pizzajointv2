import { Variants, motion } from "framer-motion";
import { Pizza } from "../App";

interface Props {
  pizza: Pizza;
}

const containerVariants: Variants = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      when: "beforeChildren",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
    },
  },
};
const childVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const Order: React.FC<Props> = ({ pizza }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container order"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
