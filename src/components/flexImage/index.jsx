import PropTypes from 'prop-types'

const FlexImage = ({
  smImage,
  mdImage,
  lgImage,
  altName,
}) => {
  return (
    <>
      <img
        src={smImage}
        className="flex_image_width sm:hidden"
        alt={altName}
        loading="lazy"
      />
      <img
        src={mdImage}
        className="flex_image_width hidden sm:block md:hidden"
        alt={altName}
        loading="lazy"
      />
      <img
        src={lgImage}
        className="flex_image_width hidden md:block"
        alt={altName}
        loading="lazy"
      />
    </>
  )
}

FlexImage.propTypes = {
  smImage: PropTypes.string.isRequired,
  mdImage: PropTypes.string.isRequired,
  lgImage: PropTypes.string.isRequired,
  altName: PropTypes.string.isRequired,
}

export default FlexImage