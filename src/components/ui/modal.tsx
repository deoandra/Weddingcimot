"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { cn } from "./utils";
import { buttonVariants } from "./button";

type ModalContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const ModalContext = React.createContext<ModalContextValue | null>(null);

function useModal() {
  const ctx = React.useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within <Modal />");
  return ctx;
}

function Modal({
  open: openProp,
  defaultOpen,
  onOpenChange,
  children,
}: React.ComponentProps<"div"> & {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [_open, _setOpen] = React.useState(!!defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (next: boolean) => {
      if (onOpenChange) onOpenChange(next);
      else _setOpen(next);
    },
    [onOpenChange]
  );

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, setOpen]);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>{children}</ModalContext.Provider>
  );
}

function ModalTrigger({ asChild, children }: { asChild?: boolean; children: React.ReactElement }) {
  const { setOpen } = useModal();
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: (e: React.MouseEvent) => {
        children.props?.onClick?.(e);
        setOpen(true);
      },
    });
  }
  return (
    <button onClick={() => setOpen(true)}>{children}</button>
  );
}

function ModalOverlay({ className }: { className?: string }) {
  const { open, setOpen } = useModal();
  if (!open) return null;
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setOpen(false)}
      className={cn("fixed inset-0 z-[9999] bg-black/50", className)}
    />,
    document.body
  );
}

function ModalContent({ className, children }: React.ComponentProps<"div">) {
  const { open } = useModal();
  if (!open) return null;
  return createPortal(
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: -6 }}
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "bg-background fixed top-1/2 left-1/2 z-[10000] grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg sm:max-w-lg",
        className
      )}
    >
      {children}
    </motion.div>,
    document.body
  );
}

function ModalHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="modal-header" className={cn("flex flex-col gap-2", className)} {...props} />
  );
}

function ModalFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="modal-footer" className={cn("flex gap-2 justify-end", className)} {...props} />
  );
}

function ModalTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2 data-slot="modal-title" className={cn("text-lg font-semibold", className)} {...props} />
  );
}

function ModalDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p data-slot="modal-description" className={cn("text-muted-foreground text-sm", className)} {...props} />
  );
}

function ModalAction({ className, ...props }: React.ComponentProps<"button">) {
  return <button className={cn(buttonVariants(), className)} {...props} />;
}

function ModalCancel({ className, ...props }: React.ComponentProps<"button">) {
  const { setOpen } = useModal();
  return (
    <button
      className={cn(buttonVariants({ variant: "outline" }), className)}
      onClick={(e) => {
        props.onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
        setOpen(false);
      }}
      {...props}
    />
  );
}

export {
  Modal,
  ModalTrigger,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
  ModalAction,
  ModalCancel,
};
