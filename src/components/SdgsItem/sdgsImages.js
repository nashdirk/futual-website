const importImage = (size, num) => import(`Assets/img/projects/sdgs/${size}/SDGS_${num}.svg`);

const loadImages = async (imageKeys) => {
  const loadedImages = await Promise.all(
    imageKeys.map(key => {
      const [num, size] = key.split('_');
      return importImage(size, num).then(module => ({
        key,
        image: module.default
      }));
    })
  );

  return Object.fromEntries(loadedImages.map(({ key, image }) => [key, image]));
};

export { loadImages };