const Processing = () => {
  return (
    <div>
      <h1>Data Processing</h1>
      <div>
        <h2>Preprocessing</h2>
        <h3>Algorithmically</h3>
        <p>
          NDVI-Formula (Normalized Difference Vegetation Index) calculates
          Near-Infrared (NIR) minus Red band over NIR plus Red band:{" "}
          <strong>NDVI = (NIR - Red) / (NIR + Red)</strong>.
        </p>
        <p>
          NIR is strongly reflected by healthy vegetation, Red is strongly
          absorbed by green, healthy plants.
        </p>
        <p>
          The result is a value from -1 to +1, where negative values usually
          indicate water, near zero indicates sparse vegetation and higher
          values indicate dense, healthy vegetation.
        </p>
        <p>TODO NDVI example image from our dataset</p>
        <h3>Manual Labelling</h3>
        <p>
          A small subset of images has been labelled by us by hand using some
          Python tooling. There we used the "before" and "after" image of a
          location and painted interesting, i.e. damaged, areas in the "after"
          image.
          <br />
          TODO think about screenshot? Better not, because obviously AI and
          raises more questions rather than answers?
        </p>
      </div>
      <div>
        <h2>Model Training</h2>
        <p>TODO</p>
      </div>
    </div>
  );
};

export default Processing;
