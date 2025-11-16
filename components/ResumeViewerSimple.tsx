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
        size="5xl"
        scrollBehavior="inside"
        classNames={{
          base: "bg-white dark:bg-gray-900",
          header: "border-b border-gray-200 dark:border-gray-800",
          body: "p-0",
          footer: "border-t border-gray-200 dark:border-gray-800",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-between items-center">
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Resume Preview
                </span>
              </ModalHeader>
              <ModalBody>
                <div className="w-full h-[70vh] bg-gray-100 dark:bg-gray-950">
                  <iframe
                    src={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                    className="w-full h-full border-0"
                    title="Resume Preview"
                  />
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Button
                  color="secondary"
                  variant="light"
                  onPress={handleOpenInNewTab}
                  startContent={<ExternalLink size={18} />}
                >
                  Open in New Tab
                </Button>
                <div className="flex gap-2">
                  <Button
                    color="danger"
                    variant="light"
                    onPress={onClose}
                    startContent={<X size={18} />}
                  >
                    Close
                  </Button>
                  <Button
                    color="secondary"
                    onPress={handleDownload}
                    startContent={<DownloadIcon size={18} />}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  >
                    Download Resume
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
