import en from './en'
import sv from './sv'

const translation = {
  "en": en,
  "sv": sv
}

export const all_langs = () => {
  return ["en", "sv"]
}

export const path_start = (key) => {
  if (key === "en") {
    return "/";
  } else {
    return "/" + key + "/"
  }
}

const translations = (key) => {
  return translation[key]
}

export default translations