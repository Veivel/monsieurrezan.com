
import { createMedia } from "@artsy/fresnel"
import { useState, useEffect } from "react";

// @artsy/fresnel approach
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


// fireship's vanilla approach (with hooks)
// credit where credit is due:  https://fireship.io/snippets/use-media-query-hook/
const useMediaQuery = (query:string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}
export default useMediaQuery;