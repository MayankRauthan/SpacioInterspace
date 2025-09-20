import { useEffect, useState } from "react";

export default function useTypewriter(words, speed = 120, pause = 1200) {
  const [index, setIndex] = useState(0); // which word
  const [subIndex, setSubIndex] = useState(0); // which letter
  const [deleting, setDeleting] = useState(false);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (index >= words.length) return;
    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);

  useEffect(() => {
    setDisplay(words[index].substring(0, subIndex));
  }, [words, index, subIndex]);

  return display;
}
