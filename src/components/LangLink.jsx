import * as React from "react";
import { path_start } from '../translations/translations';
import { LangContext } from './context';
import {Link} from 'gatsby'

const LangLink = (props) => {
  const { langKey } = React.useContext(LangContext)
  const link = path_start(langKey) + props.to
  console.log(link)
  return (
    <Link {...props} to={link} />
  )
}

export default LangLink

