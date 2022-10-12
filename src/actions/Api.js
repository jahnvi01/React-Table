import { tableData } from "../data/Mocks";

/**
 * It returns a promise that resolves to the tableData array after a 2 second delay
 * @returns The tableData array is being returned.
 */
export const fetchList = async () => {
  setTimeout(function () {
    // Added delay for loading efect
  }, 2000);
  return tableData;
};

/**
 * @returns The length of the tableData array.
 */
export const fetchListLength = async () => {
  return tableData.length;
};
