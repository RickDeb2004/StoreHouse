import React from "react";
import Search from "@/components/Search";
import FileUploader from "@/components/FileUploader";
import LogoutModal from "@/components/LogOutModal";

const Header = ({
  userId,
  accountId,
}: {
  userId: string;
  accountId: string;
}) => {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader ownerId={userId} accountId={accountId} />
        <LogoutModal />
      </div>
    </header>
  );
};

export default Header;
