import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={classes.about}>
      <div className={classes["about-text"]}>
        <p className={classes["about-text__header"]}>
          Crafting Memorable Moments
        </p>
        <p className={classes["about-text__pg"]}>
          Welcome to Secret Santa! We are a team of passionate software
          engineers dedicated to making the holiday season even more delightful.
          Our Secret Santa app is designed to create memorable moments of
          surprise and joy among friends, families, and colleagues. Our team
          comprises highly skilled software engineers with years of experience
          in creating innovative and user-friendly applications. We are united
          by a shared passion for technology and the joy of giving. Our journey
          began with a simple idea: to create a Secret Santa app that would not
          only simplify the process but also add an element of surprise and
          anticipation to the holiday season. Over countless hours of coding,
          testing, and refining, we turned that idea into a reality.
        </p>
        <p className={classes["about-text__pg"]}>
          At CC&S, we are driven by a mission to foster connections and spread
          happiness through technology. Our values include creativity,
          user-centric design, and a commitment to ethical practices.
        </p>
        <p className={classes["about-text__pg"]}>
          What makes our Secret Santa app unique is our unwavering dedication to
          user experience. We have meticulously crafted every feature to ensure
          that the process of organizing and participating in a Secret Santa
          exchange is seamless, fun, and stress-free. Our Secret Santa app
          offers a range of features, including automated participant
          assignments, wishlist sharing, and anonymous messaging. We have
          designed it to be intuitive and user-friendly, so you can focus on the
          joy of giving
        </p>
      </div>
      <div className={classes["about-contact"]}>
        <h1 className={classes["about-contact__header"]}>
          Thank you for choosing CC&S for your Secret Santa celebrations. We are
          excited to be part of your special moments.
        </h1>
        <p className={classes["about-contact__pg"]}>
          Have questions, feedback, or just want to say hello? We will love to
          hear from you!
        </p>
        <p>
          <button className={classes["about-contact__btn"]}>
            Contact us <a href="mailto:alexmar19190@gmail.com"> </a>
          </button>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
