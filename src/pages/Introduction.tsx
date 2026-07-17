import Image from "../components/Image";

const Introduction = () => {
  return (
    <div>
      <h1>Introduction</h1>
      <h2>Overview</h2>
      <p>
        <strong>Initial Idea:</strong> expose factories harming nature by
        satellite images
        <br />
        <strong>Conceptual approach:</strong> collect satellite images over
        period of time of known positive and negative examples
        <br />
        <strong>Train Model</strong> with the gathered image dataset
        <br />
        <strong>Use Model</strong> to identify bad factories
      </p>
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
