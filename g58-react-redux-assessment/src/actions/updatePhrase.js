export const filterPhrase = (phrase) => {
  return {
    type: 'UPDATE_PHRASE',
    payload: phrase
  }
}
