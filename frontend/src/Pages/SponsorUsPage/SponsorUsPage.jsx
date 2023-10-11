import React from 'react';
import Iframe from 'react-iframe';
import SponsershipPDF from './../../../assets/pdfs/HackRPI Sponsorship Booklet 2023.pdf'

function SponsorUsPage() {
  return (
    <div className="pdf-and-logo">
      <div className="pdf">
        <Iframe
          src='https://drive.google.com/drive/u/0/folders/1bvx5a6eXrHhq8l9B3P5Dv-1JEcp-kUg-'
          className="pdf-iframe"
        ></Iframe>
      </div>
      <div className="pdf">
        <Iframe
          src="https://drive.google.com/drive/u/0/folders/1bvx5a6eXrHhq8l9B3P5Dv-1JEcp-kUg-"
          className="pdf-iframe"
        ></Iframe>
      </div>
    </div>
  );
}
export default SponsorUsPage;
