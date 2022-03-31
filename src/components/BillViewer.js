import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import BillSummary from "../assets/img/BillSummary.jpg";
import { CgFileDocument } from "react-icons/cg";

function BillViewer() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setIsViewerOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeImageViewer = () => {
    setIsViewerOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="BillViewer">
      <img
        className="bill-img"
        src={BillSummary}
        alt="bill summary"
        onClick={() => openImageViewer(0)}
      />
      <button
        onClick={() =>
          window.open(
            "https://www.congress.gov/bill/117th-congress/house-bill/4331/text",
            "_blank"
          )
        }
      >
        <CgFileDocument />
        Read Full Bill Text
      </button>
      {isViewerOpen && (
        <ImageViewer
          src={[BillSummary]}
          currentIndex={0}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
}

export default BillViewer;
