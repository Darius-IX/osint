import { nbsp } from "../App";

const Results = () => {
  return (
    <div>
      <h1>Results</h1>
      <div>
        <p>TODO</p>
      </div>
      <div>
        <h2>Limitations</h2>
        <p>
          <strong>The Resolution</strong> of (10m)<sup>2</sup> per pixel is not
          very high. Up to five day delay, depending on use case, can be a
          limitation, but not when observing a longer period of time anyways.
        </p>
        <p>
          <strong>Training</strong> such a model, especially with increased size
          of dataset (either more, bigger or higher resolution images), can get
          much more costly.
        </p>
        <p>
          <strong>Clouds</strong> can fully cover the image and make conclusions
          from the environment impossible, either have to manually or
          automatically sort out cloudy images.
          <br />
          "Garbage in - Garbage out"
        </p>
      </div>
      <div>
        <h2>Conclusion and final thoughts</h2>
        <p>
          We think we got very far from our inital idea to automatically expose
          factories that harm the nature. The result is as expected, as hoped.
          To complete the full vision there are only two steps remaining: use
          the model to actually scan the whole world (or a larger dataset of
          existing factories) and if there is a "hit", i.e. the model finds
          signs of environmental damage, some NGO or Government has to start
          their usual investigations.
        </p>
        <p>
          Overall, we are very happy with the results. There were some
          challenges, mostly in finding a viable dataset that is neither too
          large, as our data literally could be images of the whole world, nor
          too small such that the model is too biased and overfitted. We think
          we found a sweet spot, as 120GB, 40{nbsp}000 locations with (2.25km)
          <sup>2</sup> are both feasible and provide a strong base for a good
          model.
        </p>
      </div>
    </div>
  );
};

export default Results;
