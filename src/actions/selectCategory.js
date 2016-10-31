export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export default function (category) {
  return {
    type: SELECT_CATEGORY,
    category
  };
}
