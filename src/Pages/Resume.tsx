import { useState, useEffect } from 'react'
import '../index.scss'
import ResultItem from '../Components/ResultItem'
import { PortfolioItem } from '../Types/PortfolioItem';

function Resume() {
  return (
    <>
      <br/>
      <embed src="Andrew_Ratz_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="100%" height="600px" />
    </>
  )
}

export default Resume
