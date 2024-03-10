const getRandomColor = () => {
    const random255 = () => Math.floor(Math.random() * 256);
    return `rgba(${random255()}, ${random255()}, ${random255()}, 0.8)`;
  };

export default getRandomColor;