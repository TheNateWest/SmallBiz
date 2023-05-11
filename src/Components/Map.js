import React from 'react'

export default function Map({address, city, state, name}) {
    console.log(address)
    const addressParam=[name, address, city, state].join(" ").split(" ").join("+").replaceAll(",", "")
    console.log(addressParam)
  return (
    <iframe
  width="600"
  height="450"
  style={{border:0}}
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_APIKEY}
    &q=${addressParam}`}>
</iframe>
  )
}
