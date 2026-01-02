// Bismillahirahmanirahim 
// ElHAMDULİLLAHİRABBULALEMİN
// Es-selatu ve Es-selamu ala Resulina Muhammedin 
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// SuphanAllah, Elhamdulillah, Allahu Ekber



"use client";

import { useSession } from "@/app/(revebir)/SessionProvider";
import LoadingButton from "@/hemanen/LoadingButton";
import { Button } from "@/hemanen/ui/button";
import UserAvatar from "@/hemanen/UserAvatar";
import { cn } from "@/pirtukxane/utils";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useDropzone } from "@uploadthing/react";
import { ImageIcon, Loader2, X } from "lucide-react";
import { useSubmitPostMutation } from "./mutations";
import React, { ClipboardEvent, useRef, useState } from "react";
import useMediaUpload, { Attachment } from "./useMediaUpload";

export default function PostEditor() {
  const { user } = useSession();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");

  const mutation = useSubmitPostMutation();

  const {
    startUpload,
    attachments,
    isUploading,
    uploadProgress,
    removeAttachment,
    reset: resetMediaUploads,
  } = useMediaUpload();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: startUpload,
  });

  const { onClick, ...rootProps } = getRootProps();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ bold: {}, italic: false }), // bold'u etkinleştir, italic'i devre dışı bırak
      Placeholder.configure({ placeholder: "Yazınızı buraya yazın..." }),
    ],
  });

  const description =
    editor?.getText({ blockSeparator: "\n" }) || "";

  // Prevent images from being inserted into the editor on paste.
  // Instead upload them as attachments.
  function onPaste(e: ClipboardEvent<HTMLDivElement>) {
    const items = Array.from(e.clipboardData?.items || []);
    const files = items
      .filter((item) => item.kind === "file")
      .map((item) => item.getAsFile()) as File[];

    if (files.length) {
      e.preventDefault();
      e.stopPropagation();
      startUpload(files);
    }
  }

  // Also guard against dropping files directly into the editor (some browsers bypass the outer dropzone)
  function onEditorDrop(e: React.DragEvent<HTMLDivElement>) {
    const files = Array.from(e.dataTransfer?.files || []);
    if (files.length) {
      e.preventDefault();
      e.stopPropagation();
      startUpload(files);
    }
  }

  function onSubmit() {
    mutation.mutate(
      {
        content: [
          title.trim(),
          address.trim(),
          ...description
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line.length > 0),
        ],
        mediaIds: attachments.map((a) => a.mediaId).filter(Boolean) as string[],
      },
      {
        onSuccess: () => {
          setTitle("");
          setAddress("");
          editor?.commands.clearContent();
          resetMediaUploads();
        },
      }
    );
  }

  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-card p-3 sm:p-5 shadow-sm text-black w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
        <UserAvatar avatarUrl={user.avatarUrl} className="hidden sm:inline" />
        <div className="w-full space-y-3">
          <input
            type="text"
            placeholder="Yazı Başlığı"
            className="w-full rounded-lg border px-4 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={100}
            required
          />
          <input
            type="text"
            placeholder="Konu"
            className="w-full rounded-lg border px-4 py-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            maxLength={200}
            required
          />
        </div>
      </div>
      <div {...rootProps} className="w-full">
        <EditorContent
          editor={editor}
          className={cn(
            "max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background px-3 py-3 text-black prose prose-green",
            isDragActive && "outline-dashed",
          )}
          onPaste={onPaste}
          onDrop={onEditorDrop}
        />
        <input {...getInputProps()} />
      </div>
      {!!attachments.length && (
        <AttachmentPreviews
          attachments={attachments}
          removeAttachment={removeAttachment}
        />
      )}
      <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
        {isUploading && (
          <>
            <span className="text-sm">{uploadProgress ?? 0}%</span>
            <Loader2 className="size-5 animate-spin text-primary" />
          </>
        )}
        <AddAttachmentsButton
          onFilesSelected={startUpload}
          disabled={isUploading || attachments.length >= 10}
        />
        <LoadingButton
          onClick={onSubmit}
          loading={mutation.isPending}
          disabled={
            !title.trim() || !address.trim() || !description.trim() || isUploading
          }
          className="min-w-20"
        >
           Yayınla
        </LoadingButton>
      </div>
    </div>
  );
}

function AttachmentPreviews({
  attachments,
  removeAttachment,
}: {
  attachments: Attachment[];
  removeAttachment: (id: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      {attachments.map((attachment) => (
        <AttachmentPreview
          key={attachment.id}
          attachment={attachment}
          onRemoveClick={() => removeAttachment(attachment.id)}
        />
      ))}
    </div>
  );
}

function AttachmentPreview({
  attachment,
  onRemoveClick,
}: {
  attachment: Attachment;
  onRemoveClick: () => void;
}) {
  const src = attachment.url || URL.createObjectURL(attachment.file);

  return (
    <div className={cn("relative mx-auto size-fit", attachment.isUploading && "opacity-50")}>
      {attachment.file.type.startsWith("image") ? (
        // Use native <img> for blob/object URLs to avoid next/image issues with dynamic blobs
        <img
          src={src}
          alt="Attachment preview"
          width={500}
          height={500}
          className="size-fit max-h-[30rem] rounded-2xl object-cover"
        />
      ) : (
        <video controls className="size-fit max-h-[30rem] rounded-2xl">
          <source src={src} type={attachment.file.type} />
        </video>
      )}
      {!attachment.isUploading && (
        <button
          onClick={onRemoveClick}
          className="absolute right-3 top-3 rounded-full bg-foreground p-1.5 text-background hover:bg-foreground/60"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
}

function AddAttachmentsButton({
  onFilesSelected,
  disabled,
}: {
  onFilesSelected: (files: File[]) => void;
  disabled: boolean;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-primary hover:text-primary"
        disabled={disabled}
        onClick={() => fileInputRef.current?.click()}
      >
        <ImageIcon size={20} />
      </Button>
      <input
        type="file"
        accept="image/*, video/*"
        multiple
        ref={fileInputRef}
        className="sr-only hidden"
        onChange={(e) => {
          const files = Array.from(e.target.files || []);
          if (files.length) {
            onFilesSelected(files);
            e.target.value = "";
          }
        }}
      />
    </>
  );
}
