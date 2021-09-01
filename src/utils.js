export function svg(rotation, translateX, translateY, scale) {
    const transform = `rotate(${rotation}) translate(${translateX}, ${translateY}) scale(${scale})`

    return (
        <svg fill="none" width="122px" height="122px" viewBox="0 0 122 122"
            xmlns="http://www.w3.org/2000/svg">
            <svg fill="none" height="122px" viewBox="0 0 122 122" width="122px" x="0">
                <pattern id="checkerboard" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <rect fill="#d9d9d9" x="0" width="8" height="8" y="0"></rect>
                    <rect fill="#d9d9d9" x="8" width="8" height="8" y="8"></rect>
                </pattern>
                <g fill="#0B9BE3">
                    <clipPath id="my-hex">
                        <path d="M84.75 4L118 61L84.75 118H37.25L4 61L37.25 4H84.75Z"></path>
                    </clipPath>
                    <g clip-path="url(#my-hex)">
                        <image 
                            xlinkHref="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2020/3/16/babypanda2_getty.jpg.rend.hgtvcom.616.411.suffix/1584396557688.jpeg"
                            transform={transform}
                        />
                    </g>
                </g>
            </svg>
        </svg>
    )
}