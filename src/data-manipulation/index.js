import { useState } from "react";

export default function DataManipulation() {
  // create a state that stores the sampleData as an initial state
  const [data, setData] = useState(sampleData);
  // implement the following buttons
  // make sure change the sampleData with your state name
  return (
    <div>
      <button
        onClick={() => {
          setData((curr) => {
            return {
              ...curr,
              additionalData: {
                ...curr.additionalData,
                moreDetails: {
                  ...curr.additionalData.moreDetails,
                  hometown: { city: "Chicago", state: "IL" },
                },
              },
            };
          });
        }}
      >
        Change hometown to Chicago
      </button>
      <button
        onClick={() => {
          setData((curr) => {
            return {
              ...curr,
              additionalData: {
                ...curr.additionalData,
                moreDetails: {
                  ...curr.additionalData.moreDetails,
                  numberOfSiblings:
                    curr.additionalData.moreDetails.numberOfSiblings + 1,
                },
              },
            };
          });
        }}
      >
        Increment numberOfSiblings by 1. It can increment many times.
      </button>
      <button
        onClick={() => {
          setData((curr) => {
            return {
              ...curr,
              additionalData: {
                ...curr.additionalData,
                favoriteHobbies: [
                  ...curr.additionalData.favoriteHobbies,
                  "Breakdancing",
                ],
              },
            };
          });
        }}
      >
        Add a new hobby to favoriteHobbies
      </button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

const sampleData = {
  name: "John",
  additionalData: {
    instructor: true,
    favoriteHobbies: ["Coding", "Playing Basketball"],
    favoriteFood: {
      type: "soup",
      includeNoodle: true,
    },
    moreDetails: {
      favoriteBasketballPlayer: "Kyrie Irving",
      numberOfSiblings: 5,
      isYoungest: true,
      hometown: {
        city: "Portland",
        state: "OR",
      },
      citiesLivedIn: ["Portland", "Chicago", "Ulaanbaatar"],
    },
  },
};
