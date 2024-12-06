"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signOutUser } from "@/lib/actions/user.actions";

const LogoutModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOutUser();
      setIsOpen(false);
      window.location.href = "/sign-in"; // Redirect to login page after logout
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  return (
    <>
      <Button
        type="button"
        className="sign-out-button"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src="/assets/icons/logout.svg"
          alt="logout"
          width={24}
          height={24}
          className="w-6"
        />
      </Button>

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="shad-alert-dialog backdrop-blur-md">
        <Image
            src="/assets/icons/close-dark.svg"
            alt="close"
            width={20}
            height={20}
            onClick={() => setIsOpen(false)}
            className="logout-close-button absolute top-4 right-4 cursor-pointer"
          />
          <AlertDialogHeader className="relative flex justify-center">
            <AlertDialogTitle className="h2 text-center">
              Confirm Logout
             
            </AlertDialogTitle>
            <AlertDialogDescription className="subtitle-2 text-center text-light-100">
              Are you sure you want to log out?
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <div className="flex w-full flex-col gap-4">
              <AlertDialogAction
                onClick={handleLogout}
                className="shad-submit-btn h-12"
                type="button"
              >
                Yes, Logout
              </AlertDialogAction>
              <Button
                type="button"
                variant="secondary"
                className="h-12"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default LogoutModal;
