"use client";

import { delay, motion } from "framer-motion";

interface Props {
  confirm: string;
}

const Confirmation = ({ confirm }: Props) => {
  if (!confirm) return null;

  let text;
  if (confirm === "hackerapp") {
    text =
      "Thank you for applying to be a hacker - be on the lookout for emails from us in the future!";
  } else if (confirm === "volunteerapp") {
    text =
      "Thank you for applying to be a volunteer - be on the lookout for emails from us in the future!";
  }

  return (
    <motion.div
      initial={{ backgroundColor: "#00c777", opacity: 0.9 }}
      animate={{ opacity: 0, transitionEnd: { display: "none" } }}
      transition={{ duration: 0.4, delay: 4 }}
      className="mb-8 flex h-16 w-full items-center rounded-md px-6"
    >
      {text}
    </motion.div>
  );
};

export default Confirmation;
