import React, { useState } from 'react';
import resumePDF from '../../assets/resume.pdf'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  return (
    <div>
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