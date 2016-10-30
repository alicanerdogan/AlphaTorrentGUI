export const OPEN_IN_FOLDER = 'OPEN_IN_FOLDER';

export default function (filepath) {
  return {
    type: OPEN_IN_FOLDER,
    filepath
  };
}
