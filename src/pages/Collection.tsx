import { approx, nbsp } from "../App";
import Image from "../components/Image";

const Collection = () => {
  return (
    <div>
      <h1>Data Collection</h1>
      <div>
        <h2>Summary</h2>
        <p>
          <strong>Source: </strong>
          ESA Sentinel 2 satellite images
          <br />
          <strong>Updated: </strong>
          Every 5 days
          <br />
          <strong>Resolution: </strong>
          10m x 10m per pixel
        </p>
      </div>
      <div>
        <h2>Data Source</h2>
        <p>
          European Space Agency (ESA) open sources the Sentinel 2 dataset.
          <br />
          It is updated at least every 5 days, so for our observations over a
          longeer period of time that is perfectly fine.
          <br />
          We only used data from the time span of 2017 until today.
          <br />
          The resolution is 10m x 10m per pixel.
          <br />
          There are 13 color bands available in total, of which 6 suit to our
          case. Mostly, because many are not available in 10m x 10m resolution,
          but worse. The used bands are TODO
        </p>
        <div>
          <h2>Color Bands Example Images</h2>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Image
              src="sat-ex-rgb.png"
              description="Common RGB (Three bands)"
            ></Image>
            <Image src="sat-ex-ir.png" description="Infrared"></Image>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Image src="sat-ex-gr.png" description="Green TODO"></Image>
            <Image src="sat-ex-bl.png" description="Blue TODO"></Image>
          </div>
        </div>
        <div>
          <h2>Our Subset</h2>
          <p>40 000 locations dataset, from where?</p>
          <p>
            We used images of 40{nbsp}000 locations with a size (2.25km)
            <sup>2</sup> each. With 4 Images per Location (2017, 2020, 2023,
            2026) this results in a total of about 1.5 times the size of germany
            or 3MB times 40{nbsp}000 Locations {approx} 120GB of imagery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
