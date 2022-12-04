import React, { useState } from 'react';
import resumePDF from './resume.pdf'
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import { CgFileDocument } from "react-icons/cg";

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  return (
    <div className="background-alt" id="resume">
      <h2 className="heading"><CgFileDocument /> Resume</h2>
      <a href={resumePDF} download>
        <button>
          Download CV
        </button>
      </a>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess} renderMode={"canvas"}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
}