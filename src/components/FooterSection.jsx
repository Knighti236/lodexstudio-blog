import React from "react";
import GlobalContainer from "../utils/GlobalContainer";

function FooterSection() {
  return (
    <footer className="p-12 border-t">
      <GlobalContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* links, contatos, social, etc */}
        </div>
      </GlobalContainer>
    </footer>
  );
}

export default FooterSection;