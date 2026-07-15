import Image from "../components/Image";

const Introduction = () => {
  return (
    <div>
      <h1>Introduction</h1>
      <div>
        <h2>Objective</h2>
        <p>
          Find a scalable automated method to evaluate satellite imagery with
          regards to environmental impact.
        </p>
        <p>
          Ultimate goal: reveal companies who destroy nature, although they
          should not
        </p>
      </div>
      <div>
        <h2>Case Study</h2>
        <Image src="nyt-article-headline.png" description=""></Image>
        <Image
          src="nyt-article-abstract.png"
          description="Diesel Catastrophe in Russia - Example of extreme environmental impact from factories [source: TODO]"
        ></Image>
      </div>
      <div>
        <h2>Research Questions</h2>
        <ol>
          <li>
            Can we train a model using satellite images from the same location
            over time to identify irregular damage to the environment?
          </li>
          <li>Can we use the damage pattern to identify the origin?</li>
        </ol>
      </div>
    </div>
  );
};

export default Introduction;
