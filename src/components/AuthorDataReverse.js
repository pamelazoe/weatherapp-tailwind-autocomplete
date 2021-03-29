const AuthorData = ({
  name,
  username,
  instagram_username,
  twitter_username,
  rawImage,
  portfolio_url,
  unsplashLink,
}) => {
  const {raw} = rawImage

  return (
    <div className="lg:w-full lg:flex lg:flex-row lg:items-center lg:justify-end lg:self-end lg:pr-8 lg:gap-x-2">
      {twitter_username === null ? null : (
        <a
          href={`https://twitter.com/${twitter_username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="lg:h-7"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            width="2em"
            height="3em"
            style={{transform: 'rotate(360deg)'}}
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M19.633 7.997c.013.175.013.349.013.523c0 5.325-4.053 11.461-11.46 11.461c-2.282 0-4.402-.661-6.186-1.809c.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721a4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062c.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973a4.02 4.02 0 0 1-1.771 2.22a8.073 8.073 0 0 0 2.319-.624a8.645 8.645 0 0 1-2.019 2.083z"
              fill="white"
            />
          </svg>{' '}
        </a>
      )}
      {instagram_username === null ? null : (
        <a
          href={`https://instagram.com/${instagram_username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="lg:h-7"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            width="2em"
            height="3em"
            style={{transform: 'rotate(360deg)'}}
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216a4.61 4.61 0 0 0-2.633-2.633a6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42a4.607 4.607 0 0 0-2.633 2.633a6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419a4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187c.043-.962.056-1.267.056-3.71c-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339c-.597 0-1.078-.482-1.078-1.078a1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"
              fill="white"
            />
            <circle cx="11.994" cy="11.979" r="3.003" fill="white" />
          </svg>{' '}
        </a>
      )}
      <a
        href={`https://unsplash.com/@${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="lg:h-7"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          width="2em"
          height="3em"
          style={{transform: 'rotate(360deg)'}}
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path d="M15 4.5H9v4h6v-4z" fill="white" />
            <path d="M4 10.5h5v4h6v-4h5v9H4v-9z" fill="white" />
          </g>{' '}
        </svg>{' '}
      </a>{' '}
      <a href={unsplashLink} target="_blank" rel="noopener noreferrer">
        <svg
          className="lg:h-7"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          width="2em"
          height="3em"
          style={{transform: 'rotate(360deg)'}}
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            d="M5 5v14h14V5H5zm0-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm3.5 7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3zM7 14l2-2l2 2l3-3l3 3v3H7v-3z"
            fill="white"
            fillRule="nonzero"
          />
          <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" />
        </svg>
      </a>
      <a
        href={portfolio_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-medium tracking-widest lg:text-xl lg:ml-7"
      >
        {name}
      </a>
    </div>
  )
}

export default AuthorData
