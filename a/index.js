import algoliasearch from "algoliasearch";
import fetch from "node-fetch";
fetch("https://dashboard.algolia.com/sample_datasets/movie.json")
  .then((data) => data.json())
  .then((records) => {
    const client = algoliasearch(
      "IR1IZE3PC7",
      "72bdf75575fdc20bacb60fa30c9a3d14"
    );

    const index = client.initIndex("your_index_name");

    index.saveObjects(records, { autoGenerateObjectIDIfNotExist: true });
  })
  .catch((error) => {
    console.error(error);
  });