export default function getRandomElements(array, number) {
    const shuffledArray = array.slice();
    shuffledArray.sort(() => Math.random() - 0.5);
    const randomSpecificElements = shuffledArray.slice(0, number);
    return randomSpecificElements;
}
