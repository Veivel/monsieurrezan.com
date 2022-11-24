// DEPRECATED (using @artsy/fresnel)
import { createMedia } from "@artsy/fresnel"

const ExampleAppMedia = createMedia({
  breakpoints: {
    xs: 0,
    sm: 768,
    md: 1000,
    lg: 1200,
  },
})
export const mediaStyles = ExampleAppMedia.createMediaStyle()
export const { Media, MediaContextProvider } = ExampleAppMedia