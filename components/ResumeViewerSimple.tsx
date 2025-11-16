"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { DownloadIcon, Eye, X, ExternalLink } from "lucide-react";

interface ResumeViewerSimpleProps {
  resumeUrl: string;
  buttonSize?: "sm" | "md" | "lg";
  className?: string;
}

export const ResumeViewerSimple: React.FC<ResumeViewerSimpleProps> = ({
  resumeUrl,
  buttonSize = "lg",
  className = "",
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Saad_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open(resumeUrl, "_blank");
  };

  return (
    <>
      <div className={`flex gap-2 ${className}`}>
        <Button
          variant="solid"
          color="secondary"
          size={buttonSize}
          onPress={onOpen}
          className="group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Eye size={18} />
            View Resume
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="full"
        scrollBehavior="inside"
        classNames={{
          base: "bg-white dark:bg-gray-900 m-0 sm:m-4 max-h-screen",
          header: "border-b border-gray-200 dark:border-gray-800 px-4 py-3",
          body: "p-0",
          footer: "border-t border-gray-200 dark:border-gray-800 px-4 py-3",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-between items-center">
                <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Resume Preview
                </span>
              </ModalHeader>
              <ModalBody>
                <div className="w-full h-[60vh] sm:h-[70vh] bg-gray-100 dark:bg-gray-950">
                  <iframe
                    src={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                    className="w-full h-full border-0"
                    title="Resume Preview"
                  />
                </div>
              </ModalBody>
              <ModalFooter className="flex flex-col sm:flex-row justify-between gap-2">
                <Button
                  color="secondary"
                  variant="light"
                  onPress={handleOpenInNewTab}
                  startContent={<ExternalLink size={16} />}
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  <span className="hidden sm:inline">Open in New Tab</span>
                  <span className="sm:hidden">New Tab</span>
                </Button>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Button
                    color="danger"
                    variant="light"
                    onPress={onClose}
                    startContent={<X size={16} />}
                    size="sm"
                    className="flex-1 sm:flex-none"
                  >
                    Close
                  </Button>
                  <Button
                    color="secondary"
                    onPress={handleDownload}
                    startContent={<DownloadIcon size={16} />}
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white flex-1 sm:flex-none"
                  >
                    Download
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
