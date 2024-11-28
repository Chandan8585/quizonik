// import { Navbar, QuizCard} from "../../components/Index";

import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import { Navbar, QuizCard } from "../../components/Index";

export const Home = () => {
  const [categories, setCategories] = useState([]);

  const wrapperStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    backgroundColor: "#f9f9f9",
  };

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get("https://quiz-app-backend-8uic.vercel.app/categories");
        setCategories(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [categories]);

  return (
    <Fragment>
      <Navbar />

      <main style={wrapperStyle}>
        {categories.map((category) => (
          <QuizCard quizcategory={category} key={category.id} />
        ))}
      </main>
      
      <Footer />
    </Fragment>
  );
};
