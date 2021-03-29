const Description = ({description}) => {
  return (
    <>
      <p className="text-white overflow-x-scroll truncate">
        {description === null ? null : description}
      </p>
    </>
  )
}

export default Description
